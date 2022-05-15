const Router = require('express-promise-router');
const Classes = require('../../components/classes');
const { authenticate, adminOnly } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const classes = Classes(app);

  /**
 * @method - GET
 * @endpoint - /api/classes
 * @middleware authenticate
 * @description - Get all my classes
 */
  router.get('/', authenticate, async (req, res) => {
    const { user } = req;
    const classesArray = await classes.get(user);

    if (classesArray.length === 0) {
      res.status(404).json();
      return;
    }

    res.json(classesArray);
  });

  /**
 * @method - GET
 * @endpoint - /api/classes/students/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get all my classes
 */
  router.get('/students/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { params: { classId }, user } = req;

    const myClasses = await classes.get(user);
    if (myClasses.length < 1) return res.json({});
    const myClassesIds = myClasses.map((myClass) => myClass.id);
    if (!myClassesIds.includes(parseInt(classId, 10))) return res.status(401).json({ message: 'Unauthorized' });

    const numberOfStudents = await classes.getNumberOfStudents(classId);

    return res.json({ numberofstudents: numberOfStudents[0].numberofstudents });
  });

  /**
 * @method - GET
 * @endpoint - /api/classes/all?page=:page(\\d+)&classTitle=:classTitle(\\w+)
 * @middleware authenticate, adminOnly
 * @description - Get all classes with filter and pagination
 */
  router.get('/all', [authenticate, adminOnly], async (req, res) => {
    const { page: pageParams, classTitle } = req.query;
    const page = parseInt(pageParams, 10) || 1;
    const data = await classes.getAll({ page, classTitle });
    res.json(data);
  });

  /**
 * @method - GET
 * @endpoint - /api/classes/user=:userId(\\d+)
 * @middleware authenticate, adminOnly
 * @description - Get classes by userId
 */
  router.get('/user=:userId(\\d+)', [authenticate, adminOnly], async (req, res) => {
    const data = await classes.get({ id: req.params.userId });
    res.json(data);
  });

  /**
 * @method - DELETE
 * @endpoint - /api/classes/:id(\\d+)
 * @middleware authenticate, adminOnly
 * @description - Delete class by id
 */
  router.delete('/:id(\\d+)', [authenticate, adminOnly], async (req, res) => {
    const { params: { id } } = req;
    const data = await classes.delete(id);
    return res.json(data);
  });

  return Router().use('/classes', router);
};
