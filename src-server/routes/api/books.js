const Router = require('express-promise-router');
const Books = require('../../components/books');
const Classes = require('../../components/classes');

const { userCheck, authenticate, adminOnly } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const books = Books(app);
  const classes = Classes(app);

  /**
 * @method - GET
 * @endpoint - /api/books
 * @description - Get all books
 */

  router.get('/', userCheck, async (req, res) => {
    const user = req.user || false;
    const data = await books.getAll();

    if (user && user.id) {
      const classesArray = await classes.get(user);
      const bookIds = classesArray.map((elem) => elem.book_id);
      const filteredData = data.filter((item) => !bookIds.includes(item.id));
      return res.json(filteredData);
    }
    return res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/books/all?page=:page(\\d+)&bookTitle=:bookTitle(\\w+)
 * @middleware authenticate, adminOnly
 * @description - Get all books with filter and pagination
 */
  router.get('/all', [authenticate, adminOnly], async (req, res) => {
    const { page: pageParams, bookTitle } = req.query;
    const page = parseInt(pageParams, 10) || 1;
    const data = await books.getAllAdmin({ page, bookTitle });
    res.json(data);
  });

  /**
 * @method - DELETE
 * @endpoint - /api/books/:id(\\d+)
 * @middleware authenticate, adminOnly
 * @description - Delete book by id
 */
  router.delete('/:id(\\d+)', [authenticate, adminOnly], async (req, res) => {
    const { params: { id } } = req;
    const data = await books.delete(id);
    return res.json(data);
  });

  return Router().use('/books', router);
};
