#!/usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('../../config/env');

const DB = require('../../src-server/db');
const {
  askForInput, askChoices, askYesNo
} = require('../helper');

const tableClasses = 'classes';
const tableBooks = 'books';
let database = null;

function openDB() {
  console.log('Connecting to the DB...');
  return DB();
}

async function createClassPrompt() {
  console.info('Searching books in database...');
  let dbBooks = await database[tableBooks].find();
  if (dbBooks.length === 0) {
    console.log('Found 0 books, we need to create, run command npm run db:csv-seed ');
    return;
  }

  console.log('Found books :');
  console.table(dbBooks);
  const choices = dbBooks.map((bookObj) => bookObj.id);
  const dbBooksId = await askChoices('Choose book id...', choices);
  dbBooks = { id: dbBooksId };

  const getClassTitle = await askForInput('What is the class title?');
  const getClassDesc = await askForInput('What is the class description?');
  const getClassRegisterCode = await askForInput('What is the class registerCode?');

  const dbClass = await database[tableClasses]
    .insert({
      title: getClassTitle,
      description: getClassDesc,
      book_id: dbBooksId,
      registerCode: getClassRegisterCode
    });

  console.log('Created class:');
  console.table(dbClass);

  return dbClass;
}

openDB().then(async (db) => {
  database = db.db;
  console.info('Searching classes in database...');

  let dbClass = await database[tableClasses].find();
  if (dbClass.length === 0) {
    console.log('Found 0 classes, we need to create');
    dbClass = await createClassPrompt();
  } else {
    console.log('Found classes :');
    console.table(dbClass);
    const isToCreatClass = await askYesNo('Do you want to create class?');
    if (isToCreatClass === 'Yes') {
      dbClass = await createClassPrompt();
    }
  }
});
