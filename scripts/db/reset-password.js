#!/usr/bin/env node
const crypto = require('crypto');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('../../config/env');

const { askForInput, truncateString } = require('../helper');

const DB = require('../../src-server/db');
const auth = require('../../src-server/components/auth/helpers');

const tableUsers = 'users';

function openDB() {
  console.log('Connecting to the DB...');
  return DB();
}

async function changePass(db) {
  const email = await askForInput('What is the email of user to reset password?');
  const user = await db[tableUsers].findOne({ email });
  const { id: userId } = user;
  const generatedPassword = 'dummyPass';
  // const generatedPassword = truncateString(crypto.randomBytes(20).toString('hex'), 8);
  const salt = truncateString(crypto.randomBytes(16), 8);
  const password = auth.createHash(generatedPassword, salt);
  await db[tableUsers].save({ id: userId, salt, password });
  console.log({ email, password: generatedPassword });
}

function closeDB(db) {
  return db.instance.$pool.end();
}

if (require.main === module) {
  openDB().then((db) => changePass(db.db));
} else {
  module.exports = {
    openDB, closeDB
  };
}
