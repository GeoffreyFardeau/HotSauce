import client from './client.js';

export default {

  async getCommentBySauceId(sauceId) {
    const result = client.query('SELECT * FROM "sauce_comment" WHERE sauce_id=$1', [sauceId]);
    return result.rows;
  },

  async addCommentOnSauce(comment) {
    const result = client.query('INSERT INTO "sauce_comment" (comment_text, user_id, sauce_id) VALUES ($1, $2, $3) RETURNING *', [comment.comment_text, comment.user_id, comment.sauce_id]);
    return result.rows;
  },

  async deleteCommentOnSauce(id) {
    const result = await client.query('DELETE FROM "sauce_comment" WHERE id=$1', [id]);
    return result.rows[0];
  },
};
