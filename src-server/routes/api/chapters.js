const Router = require('express-promise-router');
const _ = require('lodash');
const Classes = require('../../components/classes');
const Chapters = require('../../components/chapters');
const { authenticate, userCheck } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const classes = Classes(app);
  const chapters = Chapters(app);

  /**
 * @method - GET
 * @endpoint - /api/chapters/classId=:classId(\\d+)/:filter*?
 * @middleware authenticate
 * @description - Get chapters by classId
 */
  router.get('/classId=:classId(\\d+)/:filter*?', authenticate, async (req, res) => {
    const params = _.pick(req.params, 'classId', 'filter');
    const { classId, filter } = params;
    const classObject = await classes.getByID(classId);
    if (classObject.length < 1) {
      res.json({});
      return;
    }
    const bookId = classObject[0].book_id;
    const data = await chapters.getByBookId(bookId);

    if (filter) {
      const { user } = req;
      const filteredData = await chapters.getUndoneChapters({
        user, chapters: data, filter, classId
      });
      res.json(filteredData);
    } else {
      res.json(data);
    }
  });

  /**
 * @method - GET
 * @endpoint - /api/chapters/bookId=:bookId(\\d+)/:filter*?
 * @middleware userCheck
 * @description - Get chapters by bookID
 */
  router.get('/bookId=:bookId(\\d+)/:filter*?', userCheck, async (req, res) => {
    const params = _.pick(req.params, 'bookId', 'filter');
    const { bookId, filter } = params;
    const data = await chapters.getByBookId(bookId);
    const user = req.user || false;

    if (filter && user && user.id) {
      const filteredData = await chapters.getUndoneChapters({ user, chapters: data, filter });
      res.json(filteredData);
    } else {
      res.json(data);
    }
  });

  return Router().use('/chapters', router);
};
