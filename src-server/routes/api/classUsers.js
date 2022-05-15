const Router = require('express-promise-router');
const _ = require('lodash');
const ClassUsers = require('../../components/classUsers');
const Classes = require('../../components/classes');
const { authenticate, adminOnly } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const classUsers = ClassUsers(app);
  const classes = Classes(app);

  /**
 * @method - POST
 * @endpoint - /api/class_users
 * @middleware authenticate
 * @description - Register in class by classCode
 */
  router.post('/', authenticate, async (req, res) => {
    const params = _.pick(req.body, 'classCode');
    const { user } = req;

    if (params.classCode) {
      const classObj = await classes.getOneByRegisterCode(params.classCode);

      if (!classObj) {
        console.log(`Could not find class for provided registition code:${params.classCode}`);
        res.status(404).json();
        return;
      }

      console.log(`Found class (id) ${classObj.id} for provided registition code:${params.classCode}`);

      let classUsersObj = await classUsers.getAll({
        class_id: classObj.id,
        user_id: user.id
      });

      if (classUsersObj.length === 0) {
        classUsersObj = await classUsers.create({
          class_id: classObj.id,
          user_id: user.id
        });
        console.log(`Registered user (id) ${user.id} in class (id) ${classObj.id}`);
      } else {
        console.log(`Already registered user (id) ${user.id} in class (id) ${classObj.id}`);
      }

      res.json(classObj);
      return;
    }

    res.status(404).json();
  });

  /**
 * @method - POST
 * @endpoint - /api/class_users/userId&classId
 * @middleware authenticate, adminOnly
 * @description - Register in class by classId userId
 */
  router.post('/userId&classId', [authenticate, adminOnly], async (req, res) => {
    const params = _.pick(req.body, 'classId', 'userId');

    if (!params.classId || !params.userId) return res.status(404).json();
    const { classId, userId } = params;
    let classUsersObj = await classUsers.getAll({
      class_id: classId,
      user_id: userId
    });

    if (classUsersObj.length === 0) {
      classUsersObj = await classUsers.create({
        class_id: classId,
        user_id: userId
      });
      console.log(`Registered user (id) ${userId} in class (id) ${classId}`);
    } else {
      console.log(`Already registered user (id) ${userId} in class (id) ${classId}`);
    }
    return res.json(classUsersObj);
  });

  /**
 * @method - DELETE
 * @endpoint - /api/class_users/classId=:classId(\\d+)&userId=:userId(\\d+)
 * @middleware authenticate, adminOnly
 * @description - Unregister user in class by classId
 */
  router.delete('/classId=:classId(\\d+)&userId=:userId(\\d+)', [authenticate, adminOnly], async (req, res) => {
    const { classId, userId } = _.pick(req.params, 'classId', 'userId');
    const classUsersObjArray = await classUsers.getAll({
      class_id: classId,
      user_id: userId
    });

    const data = await Promise.all(
      classUsersObjArray
        .map((classUsersObj) => classUsers.delete(classUsersObj.id))
    );
    res.json(data);
  });

  return Router().use('/class_users', router);
};
