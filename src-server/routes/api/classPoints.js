/* eslint-disable consistent-return */
const Router = require('express-promise-router');
const _ = require('lodash');
const ClassPoints = require('../../components/classPoints');
const Classes = require('../../components/classes');
const ClassUsers = require('../../components/classUsers');
const { authenticate } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const classPoints = ClassPoints(app);
  const classes = Classes(app);
  const classUsers = ClassUsers(app);

  /**
 * @method - GET
 * @endpoint - /api/class_points/:id(\\d+)
 * @middleware authenticate
 * @description - Get classPoints by id
 */
  router.get('/:id(\\d+)', authenticate, async (req, res) => {
    const data = await classPoints.getByID(req.params.id);
    if (data.length < 1) {
      res.json({});
      return;
    }
    res.json(data[0]);
  });

  /**
 * @method - POST
 * @endpoint - /api/class_points
 * @middleware authenticate
 * @description - Create classPoints
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
      'resource_id');

    const { class_id: classId } = _.pick(req.body, 'class_id');

    const classUsersFounded = await classUsers.getAll({
      class_id: classId,
      user_id: userId
    });

    if (classUsersFounded.length < 1) return res.status(401).json({ message: 'Unauthorized' });

    row.class_users_id = classUsersFounded[0].id;
    row.questions = JSON.stringify(row.questions);
    row.userInput = JSON.stringify(row.userInput);

    const data = await classPoints.create(userId, row);
    return res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/class_points/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get classPoints by classID
 */
  router.get('/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { params: { classId }, user } = req;
    const bookObject = await classes.getByID(classId);
    if (bookObject.length < 1) {
      res.json({});
      return;
    }
    const { role } = user;
    let data;
    if (role !== 'student') {
      data = await classPoints.getClassPointsByClassId(bookObject[0].id);
    } else {
      data = await classPoints.getMyPointsByClassId(user, bookObject[0].id);
    }
    res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/class_points/csv/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get classPoints by classID in csv
 */
  router.get('/csv/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { params: { classId }, user } = req;
    const bookObject = await classes.getByID(classId);
    if (bookObject.length < 1) {
      res.json({});
      return;
    }
    const { role } = user;

    if (role !== 'teacher') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { fastcsv, filename, mimetype } = await classPoints.getClassPointsCsv(bookObject[0].id);
    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', mimetype);

    return fastcsv.pipe(res).once('close', () => fastcsv.destroy());
  });

  /**
 * @method - GET
 * @endpoint - /api/class_points/myTotalPoints/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get leaderboard by classID
 */
  // eslint-disable-next-line consistent-return
  router.get('/myTotalPoints/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { params: { classId }, user } = req;
    const { role } = user;

    if (role !== 'student') return res.status(401).json({ message: 'Unauthorized' });

    const myClasses = await classes.get(user);
    if (myClasses.length < 1) return res.json({});
    const myClassesIds = myClasses.map((myClass) => myClass.id);
    if (!myClassesIds.includes(parseInt(classId, 10))) return res.status(401).json({ message: 'Unauthorized' });

    const studentPoints = await classPoints.getMyPointsByClassId(user, classId);
    const maxPoints = Object.values(studentPoints.reduce((r, o) => {
      r[o.resource_id] = (r[o.resource_id] && r[o.resource_id].resultPoints > o.resultPoints)
        ? r[o.resource_id] : o;

      return r;
    }, {}));

    res.json({
      resultPoints: maxPoints.reduce((a, b) => a + (b.resultPoints || 0), 0)
    });
  });

  /**
 * @method - GET
 * @endpoint - /api/class_points/leaderboard/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get leaderboard by classID
 */
  // eslint-disable-next-line consistent-return
  router.get('/leaderboard/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { params: { classId }, user } = req;
    const { role } = user;

    if (role === 'student') {
      const myClasses = await classes.get(user);
      if (myClasses.length < 1) return res.json({});
      const myClassesIds = myClasses.map((myClass) => myClass.id);
      if (!myClassesIds.includes(parseInt(classId, 10))) return res.json({});
    } else {
      const classObject = await classes.getByID(classId);
      if (classObject.length < 1) return res.json({});
    }

    const students = await classes.getStudents(classId);
    const data = [];
    await Promise.all(students.map(async (student) => {
      const studentPoints = await classPoints.getMyPointsByClassId(student, classId);

      const maxPoints = Object.values(studentPoints.reduce((r, o) => {
        r[o.resource_id] = (r[o.resource_id] && r[o.resource_id].resultPoints > o.resultPoints)
          ? r[o.resource_id] : o;

        return r;
      }, {}));
      const {
        id,
        email,
        firstName,
        lastName
      } = student;

      data.push({
        id,
        email,
        firstName,
        lastName,
        resultPoints: maxPoints.reduce((a, b) => a + (b.resultPoints || 0), 0)
      });
    }));

    res.json(data);
  });

  return Router().use('/class_points', router);
};
