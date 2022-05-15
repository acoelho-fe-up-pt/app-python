module.exports = (app) => {
  const db = app.get('db');
  const module = {};

  // Get all
  module.getResourcesByChapterId = async (chapterId) => db.query(`SELECT resources.*,
    chapters.number as chapter 
    FROM resources
    LEFT JOIN chapters ON resources.chapter_id = chapters.id
    WHERE resources.chapter_id = ${chapterId}
    ORDER BY resources.code ASC`);

  return module;
};
