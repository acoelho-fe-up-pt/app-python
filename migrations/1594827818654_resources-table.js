exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createType('types',
    [
      'C', // Ficheiro código fonte (.py)
      'V', // Vídeo
      'R', // Resumo
      'K', // Palavras-chave (keywords)
      'E', // Narrativa interativa
      'U', // URL
      'P', // Python URL
      'M', // Minijogo
      'T', // Tutorial
      'J', // Jogo
      'F' // Síntese Final
    ]);
  pgm.createTable('resources', {
    id: 'id',
    code: {
      type: 'text',
      notNull: false,
    },
    title: {
      type: 'text',
      notNull: false
    },
    description: {
      type: 'text',
      notNull: false
    },
    type: {
      type: 'types',
      notNull: true
    },
    path: {
      type: 'text',
      notNull: true
    },
    chapter_id: {
      type: 'integer',
      notNull: true,
      references: '"chapters"',
      onDelete: 'cascade',
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  });
  pgm.createIndex('resources', 'chapter_id');
  pgm.createIndex('resources', 'type');
};

exports.down = (pgm) => {

};
