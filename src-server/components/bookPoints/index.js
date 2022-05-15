/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { book_points } = db;
  const module = {};

  // Create
  module.create = async (userId, row) => {
    if (!Number(userId)) throw new Error('No userId given');
    row.user_id = userId;
    return book_points.save(row);
  };

  // Get one
  module.getByID = async (id) => db.query(
    `SELECT * FROM book_points 
    WHERE book_points.id=${id}`
  );

  module.update = async (id, row) => {
    if (!Number(id)) throw new Error('No id given');
    row.id = id;
    return book_points.save(row);
  };

  module.getPointsByResourceId = async (user, resourceId) => db.query(`SELECT book_points.* 
    FROM book_points
    WHERE book_points.resource_id = ${resourceId}
    AND book_points.user_id = ${user.id}
    ORDER BY book_points.created_at DESC`);

  module.getPointsByBookId = async (user, bookId) => db.query(`SELECT book_points.*,
  resources.title, chapters.number AS chapter  
  FROM book_points
  LEFT JOIN resources ON book_points.resource_id = resources.id
  LEFT JOIN chapters ON resources.chapter_id = chapters.id
  LEFT JOIN books ON chapters.book_id = books.id
  WHERE books.id = ${bookId}
  AND book_points.user_id = ${user.id}
  ORDER BY book_points.created_at DESC`);

  return module;
};
