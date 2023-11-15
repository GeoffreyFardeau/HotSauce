import client from './client.js';

export default {

  async addNote(note) {
    const result = await client.query('INSERT INTO "note" (note, user_id, sauce_id) VALUES ($1, $2, $3) RETURNING *', [note.note, note.user_id, note.sauce_id]);
    return result.rows[0];
  },

  async deleteNote(id) {
    const result = await client.query('DELETE FROM "note" WHERE id=$1', [id]);
    return result.rows[0];
  },
};
