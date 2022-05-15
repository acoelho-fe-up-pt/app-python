const dateFormat = require('dateformat');
const fastcsv = require('fast-csv');
const mime = require('mime');

const {
  makeid
} = require('./helper');

/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { class_points } = db;
  const module = {};

  // Create
  module.create = async (userId, row) => {
    if (!Number(userId)) throw new Error('No userId given');
    row.user_id = userId;
    return class_points.save(row);
  };

  // Get one
  module.getByID = async (id) => db.query(
    `SELECT * FROM class_points 
    WHERE class_points.id=${id}`
  );

  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return class_points.save(row);
  };

  module.getPointsByResourceId = async (user, resourceId, classId) => db.query(`SELECT class_points.* 
    FROM class_points
    LEFT JOIN class_users ON class_points.class_users_id = class_users.id
    WHERE class_points.resource_id = ${resourceId}
    AND class_users.class_id = ${classId}
    AND class_users.user_id = ${user.id}`);

  module.getMyPointsByClassId = async (user, classId) => db.query(`SELECT class_points.*,
  resources.title, chapters.number AS chapter 
  FROM class_points
  LEFT JOIN resources ON class_points.resource_id = resources.id
  LEFT JOIN chapters ON resources.chapter_id = chapters.id
  LEFT JOIN class_users ON class_points.class_users_id = class_users.id
  WHERE class_users.class_id = ${classId}
  AND class_users.user_id = ${user.id}
  ORDER BY class_points.created_at DESC`);

  module.getClassPointsByClassId = async (classId) => db.query(`SELECT class_points.*,
  resources.title, chapters.number AS chapter,
  users.email, users."firstName", users."lastName"  
  FROM class_points
  LEFT JOIN resources ON class_points.resource_id = resources.id
  LEFT JOIN chapters ON resources.chapter_id = chapters.id
  LEFT JOIN class_users ON class_points.class_users_id = class_users.id
  LEFT JOIN users ON class_users.user_id = users.id
  WHERE class_users.class_id = ${classId}
  ORDER BY class_points.created_at DESC`);

  module.getClassPointsCsv = async (classId) => {
    const fileDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:sstt');
    const filename = `app-ludificada ${fileDate} - ${makeid(18)}.csv`;
    const mimetype = mime.getType(filename);

    const rows = await module.getClassPointsByClassId(classId);

    return {
      fastcsv: fastcsv.write(rows, { headers: true }),
      filename,
      mimetype
    };
  };

  return module;
};
