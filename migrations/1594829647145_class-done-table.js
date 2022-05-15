exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('class_done', {
    id: 'id',
    resource_id: {
      type: 'integer',
      notNull: true,
      references: '"resources"',
      onDelete: 'cascade',
    },
    class_users_id: {
      type: 'integer',
      notNull: true,
      references: '"class_users"',
      onDelete: 'cascade',
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
  pgm.createIndex('class_done', 'class_users_id');
  pgm.createIndex('class_done', 'resource_id');
};

exports.down = (pgm) => {

};
