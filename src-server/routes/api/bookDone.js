const Router = require('express-promise-router');
const _ = require('lodash');
const BookDone = require('../../components/bookDone');
const { authenticate } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const bookDone = BookDone(app);

  /**
 * @method - GET
 * @endpoint - /api/book_done/resourceId=:resourceId(\\d+)
 * @middleware authenticate
 * @description - Get bookDone by resourceId
 */
  router.get('/resourceId=:resourceId(\\d+)', authenticate, async (req, res) => {
    const { resourceId } = _.pick(req.params, 'resourceId');
    const { user } = req;
    const data = await bookDone.getPointsByResourceId(user, resourceId);
    res.json(data);
  });

  /**
 * @method - POST
 * @endpoint - /api/book_done
 * @middleware authenticate
 * @description - Create bookDone
 */
  router.post('/', authenticate, async (req, res) => {
    const { book_id: bookId, resource_id: resourceId } = _.pick(req.body, 'book_id', 'resource_id');
    const { user: { id: userId } } = req;
    const data = await bookDone.create(userId, { book_id: bookId, resource_id: resourceId });
    res.json(data);
  });

  /**
 * @method - DELETE
 * @endpoint - /api/book_done/:id(\\d+)
 * @middleware authenticate
 * @description - Delete bookDone
 */
  router.delete('/:id(\\d+)', authenticate, async (req, res) => {
    const { id } = _.pick(req.params, 'id');
    const data = await bookDone.delete(id);
    return res.json(data);
  });

  return Router().use('/book_done', router);
};
