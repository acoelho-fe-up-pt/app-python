/* eslint-disable camelcase */
module.exports = (app) => {
  const db = app.get('db');
  const { book_done } = db;
  const module = {};

  // Create
  module.create = async (userId, row) => {
    if (!Number(userId)) throw new Error('No userId given');
    row.user_id = userId;
    return book_done.save(row);
  };

  // Delete
  module.delete = async (id) => {
    if (!Number(id)) throw new Error('No id given');
    return book_done.destroy({ id });
  };

  module.getPointsByResourceId = async (user, resourceId) => db.query(`SELECT book_done.* 
    FROM book_done
    WHERE book_done.resource_id = ${resourceId}
    AND book_done.user_id = ${user.id}`);

  // Get all
  module.getPointsByBookId = async (user, bookId) => db.query(`SELECT book_done.* 
  FROM book_done
  LEFT JOIN resources ON book_done.resource_id = resources.id
  LEFT JOIN chapters ON resources.chapter_id = chapters.id
  LEFT JOIN books ON chapters.book_id = books.id
  WHERE books.id = ${bookId}
  AND book_done.user_id = ${user.id}`);
  return module;
};
