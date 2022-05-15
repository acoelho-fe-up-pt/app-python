module.exports = (app) => {
  const db = app.get('db');
  // eslint-disable-next-line camelcase
  const { class_users } = db;
  const module = {};

  // Create
  module.create = async (row) => {
    if (!row) throw new Error('No row data given');
    delete row.id;
    return class_users.save(row);
  };

  // Get all
  module.get = async () => class_users.find();

  // Get all
  module.getAll = async (params = {}) => class_users.find(params);

  // Get one
  module.getOne = async (id) => class_users.findOne({ id });

  // Update
  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return class_users.save(row);
  };

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return class_users.destroy({ id });
  };

  return module;
};
