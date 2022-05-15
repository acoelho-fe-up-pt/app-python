const Router = require('express-promise-router');
const _ = require('lodash');
const { userCheck, authenticate } = require('../../components/auth/helpers');

const Books = require('../../components/books');

module.exports = (app) => {
  const router = Router();
  const books = Books(app);

  /**
 * @method - GET
 * @endpoint - /api/resources/bookId=:bookId(\\d+)
 * @middleware userCheck
 * @description - Get resources by bookID
 */
  router.get('/bookId=:bookId(\\d+)', userCheck, async (req, res) => {
    const { params } = req;
    const { bookId } = _.pick(params, 'bookId');
    const user = req.user || false;
    const data = await books.getResources({ bookId, user });
    res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/resources/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get resources by classID
 */
  router.get('/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { params } = req;
    const { classId } = _.pick(params, 'classId');
    const user = req.user || false;
    const data = await books.getResources({ classId, user });
    res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/resources/chapterId=:chapterId(\\d+)/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get resources by classID and chapterID
 */
  router.get('/chapterId=:chapterId(\\d+)/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { params } = req;
    const { chapterId, classId } = _.pick(params, 'chapterId', 'classId');
    const user = req.user || false;
    const data = await books.getResources({ chapterId, user, classId });
    res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/resources/chapterId=:chapterId(\\d+)/bookId=:bookId(\\d+)
 * @middleware userCheck
 * @description - Get resources by bookId and chapterID
 */
  router.get('/chapterId=:chapterId(\\d+)/bookId=:bookId(\\d+)', userCheck, async (req, res) => {
    const { params } = req;
    const { chapterId, bookId } = _.pick(params, 'chapterId', 'bookId');
    const user = req.user || false;
    const data = await books.getResources({ chapterId, user, bookId });
    res.json(data);
  });

  return Router().use('/resources', router);
};
