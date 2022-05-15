#!/usr/bin/env node

const csv = require('csv-parser');
const fs = require('fs');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('../../config/env');

const DB = require('../../src-server/db');
const {
  askForInput, askChoices, askYesNo
} = require('../helper');

const csvPath = './csvs/';
const tableBooks = 'books';
const tableChapters = 'chapters';
const tableResources = 'resources';
let database = null;
let rowCount = 0;

function openDB() {
  console.log('Connecting to the DB...');
  return DB();
}

async function createBookPrompt() {
  const getBookTitle = await askForInput('What is the book title?');

  const dbBook = await database[tableBooks]
    .insert({
      title: getBookTitle,
    })
    .catch((error) => console.error(error));

  console.log('Created book:');
  console.table(dbBook);

  return dbBook;
}

async function handleChapter(chapterNumber, bookId) {
  let dbChapter = await database[tableChapters]
    .insert({
      title: `Capítulo ${chapterNumber}`,
      description: 'Descrição',
      number: chapterNumber,
      book_id: bookId
    }, {
      onConflictIgnore: true
    }).catch((error) => console.error(error));

  if (!dbChapter) {
    dbChapter = await database[tableChapters]
      .findOne({ number: chapterNumber, book_id: bookId })
      .catch((error) => console.error(error));
  }

  return dbChapter;
}

async function handleResource(path, code, title, description, chapterId) {
  let dbResource = await database[tableResources]
    .findOne({
      code,
      chapter_id: chapterId
    })
    .catch((error) => console.error(error));

  if (!dbResource) {
    console.log('Create resource');
    dbResource = await database[tableResources]
      .insert({
        code,
        title,
        description,
        type: code.charAt(0),
        path,
        chapter_id: chapterId
      })
      .catch((error) => console.error(error));
  } else {
    console.log('Update resource');
    dbResource = await database[tableResources]
      .save({
        id: dbResource.id,
        code,
        title,
        description,
        type: code.charAt(0),
        path,
        chapter_id: chapterId
      })
      .catch((error) => console.error(error));
  }
  return dbResource;
}

openDB().then(async (db) => {
  database = db.db;

  console.info('Searching books in database...');
  let dbBooks = await database[tableBooks].find();
  if (dbBooks.length === 0) {
    console.log('Found 0 books, we need to create');
    dbBooks = await createBookPrompt();
  } else {
    console.log('Found books :');
    console.table(dbBooks);
    const isToCreatBook = await askYesNo('Do you want to create book?');
    if (isToCreatBook === 'Yes') {
      dbBooks = await createBookPrompt();
    } else if (dbBooks.length === 1) {
      dbBooks = { id: dbBooks[0].id };
    } else {
      const choices = dbBooks.map((bookObj) => bookObj.id);
      const dbBooksId = await askChoices('Choose book id...', choices);
      dbBooks = { id: dbBooksId };
    }
  }

  fs.readdir(csvPath, async (err, files) => {
    if (files.length === 0) return console.log('Found 0 csvs, you need to include csvs in the directory csvs');

    const csvFile = await askChoices('Choose csv ...', files);

    fs.createReadStream(csvPath + csvFile)
      .pipe(csv())
      .on('data', async ({
        codigo,
        capitulo,
        recurso,
        botao,
        alt
      }) => {
        if (
          !codigo
          || !capitulo
          || !recurso
          || !botao
          || !alt) {
          console.error('Invalid', {
            codigo, capitulo, recurso, botao, alt
          });
        } else {
          console.log({
            codigo,
            capitulo,
            recurso,
            botao,
            alt
          });

          rowCount += 1;
          const dbChapter = await handleChapter(capitulo, dbBooks.id);
          await handleResource(recurso, codigo, botao, alt, dbChapter.id);
        }
      })
      .on('end', () => {
        console.log(`CSV file successfully processed! (${rowCount} lines)`);
      });
  });
});
