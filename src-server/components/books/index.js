const _ = require('lodash');
const Classes = require('../classes');
const Chapters = require('../chapters');
const Resources = require('../resources');
const ClassPoints = require('../classPoints');
const BookPoints = require('../bookPoints');
const BookDone = require('../bookDone');
const ClassDone = require('../classDone');

module.exports = (app) => {
  const db = app.get('db');
  const { books } = db;
  const module = {};
  const classes = Classes(app);
  const chapters = Chapters(app);
  const resources = Resources(app);
  const bookPoints = BookPoints(app);
  const classPoints = ClassPoints(app);
  const bookDone = BookDone(app);
  const classDone = ClassDone(app);

  // Get all
  module.getAll = async () => db.query(
    'SELECT * from books'
  );

  // Get all with pagination
  module.getAllAdmin = async ({
    page = 1,
    limit = 4,
    bookTitle = false
  }) => {
    const findObject = {};
    if (bookTitle) findObject['title::text LIKE'] = `%${bookTitle}%`;

    const search = await books.find(findObject, {
      order: [{
        field: 'created_at',
        direction: 'asc',
        nulls: 'first'
      }],
      offset: (limit * (page - 1)),
      limit
    });

    const total = await books.count(findObject);

    return { search, totalPages: Math.ceil(total / limit) };
  };

  // Get one
  module.getByID = async (id) => db.query(
    `SELECT * from books 
    WHERE id=${id}`
  );

  // Get Resources
  module.getResources = async (params) => {
    const pickParams = _.pick(params, 'bookId', 'classId', 'user', 'chapterId');
    const {
      classId, chapterId, user
    } = pickParams;
    let { bookId } = pickParams;

    console.log('getResources - Input:', {
      classId, bookId, chapterId, user
    });

    const data = {
      chapters: [],
      entryResource: {},
      filter: {
        chapter: {}
      }
    };

    if (classId && !chapterId) {
      const classObject = await classes.getByID(classId);
      if (classObject.length < 1) {
        console.error('Could not find class');
      }
      bookId = classObject[0].book_id;
    }

    if (bookId && !chapterId) {
      data.chapters = await chapters.getByBookId(bookId);
    }

    if (chapterId) {
      data.chapters = await chapters.getByID(chapterId);
      const filteredChapter = data.chapters[0];
      const { title, description, number } = filteredChapter;
      data.filter.chapter = { title, description, number };
    }

    let entryResource = false;
    await Promise.all(data.chapters.map(async (chapter) => {
      const resourcesArray = await resources.getResourcesByChapterId(chapter.id);

      await Promise.all(resourcesArray.map(async (resource) => {
        if (user) {
          if (classId) {
            if (resource.type === 'M') {
              resource.points = await classPoints.getPointsByResourceId(user, resource.id, classId);
            } else {
              resource.points = await classDone.getPointsByResourceId(user, resource.id, classId);
            }
          } else if (resource.type === 'M') {
            resource.points = await bookPoints.getPointsByResourceId(user, resource.id);
          } else {
            resource.points = await bookDone.getPointsByResourceId(user, resource.id);
          }
        }

        if (!entryResource) {
          entryResource = { resource };
        }

        if (entryResource
          && entryResource.resource
          && entryResource.resource.points
          && resource.points
          && resource.points.length === 0
          && entryResource.resource.points.length !== 0) {
          entryResource = { resource };
        }

        if (entryResource
          && entryResource.resource
          && entryResource.resource.points
          && resource.points
          && resource.points.length === 0
          && entryResource.resource.points.length === 0
          && (entryResource.resource.chapter > resource.chapter || (
            entryResource.resource.chapter === resource.chapter
          && entryResource.resource.code > resource.code))) {
          entryResource = { resource };
        }
      }));

      chapter.resources = resourcesArray;

      data.entryResource = entryResource.resource;
    }));
    console.log('getResources - response:', data);

    return data;
  };

  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return books.save(row);
  };

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return books.destroy({ id });
  };

  return module;
};
