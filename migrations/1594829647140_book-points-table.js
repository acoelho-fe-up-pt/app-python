exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('book_points', {
    id: 'id',
    correctPoints: {
      type: 'integer',
      notNull: true
    },
    incorrectPoints: {
      type: 'integer',
      notNull: true
    },
    numberOfCorrectAnswers: {
      type: 'integer',
      notNull: true
    },
    numberOfIncorrectAnswers: {
      type: 'integer',
      notNull: true
    },
    numberOfQuestions: {
      type: 'integer',
      notNull: true
    },
    questions: {
      type: 'string',
      notNull: true
    },
    userInput: {
      type: 'string',
      notNull: true
    },
    resultPoints: {
      type: 'integer',
      notNull: true
    },
    totalPoints: {
      type: 'integer',
      notNull: true
    },
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
  pgm.createIndex('book_points', 'resource_id');
  pgm.createIndex('book_points', 'user_id');
};

exports.down = (pgm) => {

};
