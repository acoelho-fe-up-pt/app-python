exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('books', {
    id: 'id',
    title: {
      type: 'text',
      notNull: false
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
