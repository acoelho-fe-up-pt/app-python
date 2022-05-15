exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('classes', {
    id: 'id',
    title: {
      type: 'text',
      notNull: true
    },
    description: {
      type: 'text',
      notNull: false
    },
    registerCode: {
      type: 'text',
      notNull: false
    },
    book_id: {
      type: 'integer',
      notNull: true,
      references: '"books"',
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
