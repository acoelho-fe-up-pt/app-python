exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('class_users', {
    id: 'id',
    class_id: {
      type: 'integer',
      notNull: true,
      references: '"classes"',
      onDelete: 'cascade',
    },
    user_id: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'cascade',
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
};

exports.down = (pgm) => {

};
