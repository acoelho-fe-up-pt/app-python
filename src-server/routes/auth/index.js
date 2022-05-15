const Router = require('express-promise-router');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const auth = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const users = require('../../components/users')(app);
  const classes = require('../../components/classes')(app);
  // eslint-disable-next-line camelcase
  const class_users = require('../../components/classUsers')(app);

  /**
 * @method - POST
 * @endpoint - /auth/login
 * @description - Login user
 */
  router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (err1, user) => {
      if (err1 || !user) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      }

      req.logIn(user, { session: false }, (err2) => {
        if (err2) {
          res.send(err2);
        } else {
          const token = auth.signUser(user);
          res.json({ user, token });
        }
      });
    })(req, res);
  });

  /**
 * @method - POST
 * @endpoint - /auth/register
 * @description - Resgister user
 */
  router.post('/register', async (req, res) => {
    const params = _.pick(req.body, 'email', 'firstName', 'lastName', 'password', 'classCode');
    params.salt = crypto.randomBytes(4).toString('hex');
    params.password = auth.createHash(params.password, params.salt);
    params.role = 'student';

    const user = await users.create(params);
    console.log(`User created! (id:${user.id}, email:${user.email})`);

    if (params.classCode) {
      const classObj = await classes.getOneByRegisterCode(params.classCode);
      console.log(`Found class (id) ${classObj.id} for provided registition code:${params.classCode}`);
      const classUsersObj = await class_users.create({
        class_id: classObj.id,
        user_id: user.id
      });
      console.log(`Registered user (id) ${classUsersObj.user_id} in class (id)${classUsersObj.class_id}`);
    }

    const token = auth.signUser(user);
    return res.json({ user, token });
  });

  /**
 * @method - PUT
 * @endpoint - /auth/register
 * @middleware authenticate
 * @description - Update user data ('firstName', 'lastName' and 'password')
 */
  router.put('/register', auth.authenticate, async (req, res) => {
    const { user: { id, email, role } } = req;
    const user = _.pick(req.body, 'firstName', 'lastName', 'password');
    user.salt = crypto.randomBytes(4).toString('hex');
    user.password = auth.createHash(user.password, user.salt);
    user.email = email;
    user.role = role;

    const updatedUser = await users.update(id, user);

    const token = auth.signUser(updatedUser);
    return res.json({ user: updatedUser, token });
  });

  /**
 * @method - GET
 * @endpoint - /auth/me
 * @middleware authenticate
 * @description - Get LoggedIn User
 */
  router.get('/me', auth.authenticate, (req, res) => res.json(req.user));

  return router;
};
