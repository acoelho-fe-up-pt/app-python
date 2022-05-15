const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const secrets = require('../../../config/secrets');

function createHash(password, salt) {
  const s = salt || crypto.randomBytes(4).toString('hex');
  const hmac = crypto.createHmac('sha256', s);
  return s + hmac.update(password).digest('hex');
}

function checkPassword(plain, hashed) {
  const salt = hashed.slice(0, 8);
  return createHash(plain, salt) === hashed;
}

function signUser(user) {
  return jwt.sign({
    id: user.id,
    email: user.email,
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }, secrets.jwt);
}

function authenticate(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err1, user) => {
    if (err1 || !user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    req.logIn(user, { session: false }, (err2) => {
      if (err2) {
        res.send(err2);
      } else {
        next();
      }
    });
  })(req, res);
}

function userCheck(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err1, user) => {
    if (user) {
      req.logIn(user, { session: false }, (err2) => {
        if (err2) {
          res.send(err2);
        } else {
          next();
        }
      });
    } else {
      next();
    }
  })(req, res);
}

function adminOnly(req, res, next) {
  const { user: { role } } = req;
  if (role !== 'admin') {
    res.json({ message: 'Permission denied.' });
  } else {
    next();
  }
}

module.exports = {
  createHash,
  checkPassword,
  signUser,
  authenticate,
  userCheck,
  adminOnly
};
