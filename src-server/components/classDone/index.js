/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { class_done } = db;
  const module = {};

  // Create
  module.create = async (userId, row) => {
    if (!Number(userId)) throw new Error('No userId given');
    row.user_id = userId;
    class_done.save(row);
  };

  // Get one
  module.getByID = async (id) => db.query(
    `SELECT * FROM class_done 
    WHERE class_done.id=${id}`
  );

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return class_done.destroy({ id });
  };

  module.getPointsByResourceId = async (user, resourceId, classId) => db.query(`SELECT class_done.* 
    FROM class_done
    LEFT JOIN class_users ON class_done.class_users_id = class_users.id
    WHERE class_done.resource_id = ${resourceId}
    AND class_users.class_id = ${classId}
    AND class_users.user_id = ${user.id}`);

  // Get all
  module.getPointsByClassId = async (user, classId) => db.query(`SELECT class_done.* 
  FROM class_done
  WHERE class_done.class_id = ${classId}
  AND class_done.user_id = ${user.id}`);

  return module;
};
