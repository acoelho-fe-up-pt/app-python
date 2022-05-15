const _ = require('lodash');
const Resources = require('../resources');
const ClassPoints = require('../classPoints');
const BookPoints = require('../bookPoints');
const BookDone = require('../bookDone');
const ClassDone = require('../classDone');

module.exports = (app) => {
  const db = app.get('db');
  const module = {};
  const resources = Resources(app);
  const bookPoints = BookPoints(app);
  const classPoints = ClassPoints(app);
  const bookDone = BookDone(app);
  const classDone = ClassDone(app);

  module.getByID = async (id) => db.query(
    `SELECT chapters.* FROM chapters 
    WHERE chapters.id=${id}
    ORDER BY chapters.number`
  );

  module.getByBookId = async (bookId) => db.query(
    `SELECT chapters.* FROM chapters
  WHERE book_id= ${bookId}
    ORDER BY chapters.number`
  );

  // Get undone
  module.getUndoneChapters = async (params) => {
    const pickParams = _.pick(params, 'classId', 'user', 'chapters', 'filter');
    const {
      classId, chapters, user, filter
    } = pickParams;

    await Promise.all(chapters.map(async (chapter) => {
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
      }));
      chapter.resources = resourcesArray;
    }));

    return chapters.filter(
      (chapter) => chapter.resources.filter(
        (resource) => {
          if (filter === 'todo') {
            return resource.points && resource.points.length === 0;
          }
          return resource.points && resource.points.length !== 0;
        }
      ).length
    );
  };

  return module;
};
