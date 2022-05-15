#!/usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('../../config/env');

const DB = require('../../src-server/db');

const tableBookPoints = 'book_points';
const tableBookDone = 'book_done';
const tableClassPoints = 'class_points';
const tableClassDone = 'class_done';

function openDB() {
  console.log('Connecting to the DB...');
  return DB();
}

function resetTableBookPoints(db) {
  return db[tableBookPoints].destroy({});
}

function resetTableBookDone(db) {
  return db[tableBookDone].destroy({});
}

function resetTableClassPoints(db) {
  return db[tableClassPoints].destroy({});
}

function resetTableClassDone(db) {
  return db[tableClassDone].destroy({});
}

function closeDB(db) {
  return db.instance.$pool.end();
}

if (require.main === module) {
  openDB().then(({ db }) => Promise.all([
    resetTableBookPoints(db),
    resetTableBookDone(db),
    resetTableClassPoints(db),
    resetTableClassDone(db)]).then(() => console.log('Successful Progression reset')));
} else {
  module.exports = {
    openDB, closeDB
  };
}
