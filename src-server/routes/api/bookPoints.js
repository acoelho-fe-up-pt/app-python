const Router = require('express-promise-router');
const _ = require('lodash');
const BookPoints = require('../../components/bookPoints');
const Books = require('../../components/books');
const { authenticate } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const bookPoints = BookPoints(app);
  const books = Books(app);

  /**
 * @method - GET
 * @endpoint - /api/book_points/:id(\\d+)
 * @middleware authenticate
 * @description - Get bookPoints by id
 */
  router.get('/:id(\\d+)', authenticate, async (req, res) => {
    const data = await bookPoints.getByID(req.params.id);
    if (data.length < 1) {
      res.json({});
      return;
    }
    res.json(data[0]);
  });

  /**
 * @method - POST
 * @endpoint - /api/book_points
 * @middleware authenticate
 * @description - Create bookPoints
 */
  router.post('/', authenticate, async (req, res) => {
    const { id: userId } = req.user;
    const row = _.pick(req.body,
      'correctPoints',
      'incorrectPoints',
      'numberOfCorrectAnswers',
      'numberOfIncorrectAnswers',
      'numberOfQuestions',
      'questions',
      'userInput',
      'resultPoints',
      'totalPoints',
      'resource_id',
      'book_id');
    row.questions = JSON.stringify(row.questions);
    row.userInput = JSON.stringify(row.userInput);
    const data = await bookPoints.create(userId, row);
    res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/book_points/bookId=:bookId(\\d+)
 * @middleware authenticate
 * @description - Get bookPoints by bookId
 */
  router.get('/bookId=:bookId(\\d+)', authenticate, async (req, res) => {
    const { params: { bookId } } = req;
    const bookObject = await books.getByID(bookId);
    if (bookObject.length < 1) {
      res.json({});
      return;
    }
    const data = await bookPoints.getPointsByBookId(req.user, bookObject[0].id);
    res.json(data);
  });

  return Router().use('/book_points', router);
};
