exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('class_points', {
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
  pgm.createIndex('class_points', 'class_users_id');
  pgm.createIndex('class_points', 'resource_id');
};

exports.down = (pgm) => {

};
