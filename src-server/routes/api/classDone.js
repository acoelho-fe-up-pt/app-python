const Router = require('express-promise-router');
const _ = require('lodash');
const ClassDone = require('../../components/classDone');
const ClassUsers = require('../../components/classUsers');

const { authenticate } = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const classDone = ClassDone(app);
  const classUsers = ClassUsers(app);

  /**
 * @method - GET
 * @endpoint - /api/class_done/resourceId=:resourceId(\\d+)/classId=:classId(\\d+)
 * @middleware authenticate
 * @description - Get classDone by resourceId and classId
 */
  router.get('/resourceId=:resourceId(\\d+)/classId=:classId(\\d+)', authenticate, async (req, res) => {
    const { resourceId, classId } = _.pick(req.params, 'resourceId', 'classId');
    const { user } = req;
    const data = await classDone.getPointsByResourceId(user, resourceId, classId);
    res.json(data);
  });

  /**
 * @method - POST
 * @endpoint - /api/class_done
 * @middleware authenticate
 * @description - Create classDone
 */
  router.post('/', authenticate, async (req, res) => {
    const { class_id: classId, resource_id: resourceId } = _.pick(req.body, 'class_id', 'resource_id');
    const { user: { id: userId } } = req;

    const classUsersFounded = await classUsers.getAll({
      class_id: classId,
      user_id: userId
    });

    if (classUsersFounded.length < 1) return res.status(401).json({ message: 'Unauthorized' });

    const data = await classDone.create(
      userId,
      { class_users_id: classUsersFounded[0].id, resource_id: resourceId }
    );
    return res.json(data);
  });

  /**
 * @method - DELETE
 * @endpoint - /api/class_done/:id(\\d+)
 * @middleware authenticate
 * @description - Delete classDone
 */
  router.delete('/:id(\\d+)', authenticate, async (req, res) => {
    const { id } = _.pick(req.params, 'id');
    const data = await classDone.delete(id);
    return res.json(data);
  });

  return Router().use('/class_done', router);
};
