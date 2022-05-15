const Router = require('express-promise-router');
const _ = require('lodash');
const Users = require('../../components/users');
const auth = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const users = Users(app);

  /**
 * @method - GET
 * @endpoint - /api/users?page=:page(\\d+)&email=:email(\\w+)
 * @middleware authenticate, adminOnly
 * @description - Get all users with filter and pagination
 */
  router.get('/', [auth.authenticate, auth.adminOnly], async (req, res) => {
    const { page: pageParams, email } = req.query;
    const page = parseInt(pageParams, 10) || 1;
    const data = await users.get({ page, email });
    return res.json(data);
  });

  /**
 * @method - PUT
 * @endpoint - /api/users/:id(\\d+)/role
 * @middleware authenticate, adminOnly
 * @description - Update user by id
 */
  router.put('/:id(\\d+)/role', [auth.authenticate, auth.adminOnly], async (req, res) => {
    const { params: { id } } = req;
    const data = await users.update(id, _.pick(req.body, 'role'));
    return res.json(data);
  });

  /**
 * @method - DELETE
 * @endpoint - /api/users/:id(\\d+)
 * @middleware authenticate, adminOnly
 * @description - Delete user by id
 */
  router.delete('/:id(\\d+)', [auth.authenticate, auth.adminOnly], async (req, res) => {
    const { params: { id } } = req;
    const data = await users.delete(id);
    return res.json(data);
  });

  return Router().use('/users', router);
};
