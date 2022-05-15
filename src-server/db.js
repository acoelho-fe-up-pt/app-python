const massive = require('massive');
const { connectionStr, schema } = require('../config/db');

module.exports = async () => {
  console.log('connect to Massive and get the db instance', { connectionStr, schema });
  const db = await massive(connectionStr, {
    // explicitly specify the used schemas
    allowedSchemas: [schema]
  });

  return { db };
};
