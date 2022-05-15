#!/usr/bin/env node
const crypto = require('crypto');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('../../config/env');

const DB = require('../../src-server/db');
const auth = require('../../src-server/components/auth/helpers');

const tableUsers = 'users';

function openDB() {
  console.log('Connecting to the DB...');
  return DB();
}

function truncateString(str, length) {
  if (str.length > length) {
    return str.substring(0, length);
  }
  return str;
}

function seedUsers(db) {
  const generatedPassword = truncateString(crypto.randomBytes(20).toString('hex'), 8);
  const users = [{
    email: 'admin@admin.com',
    salt: crypto.randomBytes(16),
    password: auth.createHash(generatedPassword, this.salt),
    firstName: 'Admin',
    lastName: '',
    role: 'admin',
  }];

  console.log('Seeding admin [users]...', users.map((user) => ({
    email: user.email,
    password: generatedPassword
  })));

  return db[tableUsers].insert(users);
}

function seedStudentsUsers(db) {
  const nStudents = 30;
  const students = [];
  for (let index = 0; index < nStudents; index += 1) {
    students.push({
      email: `aluno${index + 1}@dummy.com`,
      salt: crypto.randomBytes(16),
      password: auth.createHash('dummyPass', this.salt),
      firstName: `aluno${index + 1}`,
      lastName: 'dummy',
      role: 'student',
    });
  }

  console.log('Seeding dummy students [students]...', students.map((student) => ({
    email: student.email,
    password: 'dummyPass'
  })));

  return db[tableUsers].insert(students);
}

// eslint-disable-next-line no-unused-vars
function deleteResource(db) {
  db.resources.findOne({ code: 'U11A' })
    .then(({ id }) => {
      if (id) {
        db.resources.destroy(id).then(() => {
          console.log('Apagou');
        });
      }
      console.log(id);
    });

//  return db[tableUsers].insert(students);
}

function seed(db) {
  // Run seeding functions
  return seedUsers(db)
    .then(() => {
      console.log('Successfully completed the seeding process');
    });
}

function closeDB(db) {
  return db.instance.$pool.end();
}

if (require.main === module) {
  openDB().then((db) => seed(db.db));
} else {
  module.exports = {
    openDB, seed, closeDB, seedStudentsUsers
  };
}
