exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('book_done', {
    id: 'id',
    user_id: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'cascade',
    },
    resource_id: {
      type: 'integer',
      notNull: true,
      references: '"resources"',
      onDelete: 'cascade',
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
  pgm.createIndex('book_done', 'resource_id');
  pgm.createIndex('book_done', 'user_id');
};

exports.down = (pgm) => {

};
