exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createType('roles',
    [
      'admin',
      'teacher',
      'student'
    ]);
  pgm.createTable('users', {
    id: 'id',
    email: {
      type: 'varchar(255)',
      notNull: true,
      unique: true
    },
    password: {
      type: 'varchar(72)',
      notNull: true
    },
    salt: {
      type: 'varchar(72)',
      notNull: true
    },
    firstName: {
      type: 'varchar(255)',
      notNull: true
    },
    lastName: {
      type: 'varchar(255)',
      notNull: true
    },
    role: {
      type: 'roles',
      notNull: true
    },
    photo: {
      type: 'varchar(255)',
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
