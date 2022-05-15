module.exports = (app) => {
  const db = app.get('db');
  const { classes } = db;
  const module = {};

  // Create
  module.create = async (user, row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return classes.save({ ...row, user_id: user.id });
  };

  // Get all mine
  module.get = async (user) => db.query(`SELECT classes.* FROM classes
  LEFT JOIN class_users ON classes.id = class_users.class_id
  LEFT JOIN users ON class_users.user_id = users.id
  WHERE class_id IN (SELECT class_id FROM class_users WHERE user_id=${user.id})
  GROUP BY classes.id`);

  // Get all with pagination
  module.getAll = async ({
    page = 1,
    limit = 4,
    classTitle = false
  }) => {
    const findObject = {};
    if (classTitle) findObject['title::text LIKE'] = `%${classTitle}%`;

    const search = await classes.find(findObject, {
      order: [{
        field: 'created_at',
        direction: 'asc',
        nulls: 'first'
      }],
      offset: (limit * (page - 1)),
      limit
    });

    const total = await classes.count(findObject);

    return { search, totalPages: Math.ceil(total / limit) };
  };

  // Get all
  module.getNumberOfStudents = async (classId) => db.query(`SELECT COUNT(users.id) AS NumberOfStudents FROM classes
    LEFT JOIN class_users ON classes.id = class_users.class_id
    LEFT JOIN users ON class_users.user_id = users.id
    WHERE class_id = ${classId}
    AND users.role = 'student'`);

  module.getStudents = async (classId) => db.query(`SELECT users.* FROM classes
  LEFT JOIN class_users ON classes.id = class_users.class_id
  LEFT JOIN users ON class_users.user_id = users.id
  WHERE class_id = ${classId}
  AND users.role = 'student'`);

  module.getOneByRegisterCode = async (registerCode) => classes.findOne({
    registerCode
  });

  // Get one
  module.getByID = async (id) => db.query(
    `SELECT * FROM classes 
    WHERE classes.id=${id}`
  );

  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return classes.save(row);
  };

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return classes.destroy({ id });
  };

  return module;
};
