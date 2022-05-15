exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('chapters', {
    id: 'id',
    number: {
      type: 'integer',
      notNull: true
    },
    title: {
      type: 'text',
      notNull: false
    },
    description: {
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
  pgm.createIndex('chapters', ['number', 'book_id'], { unique: true });
};

exports.down = (pgm) => {

};
