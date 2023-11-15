import client from './client.js';

export default {

  async getAllSauces() {
    const result = await client.query('SELECT * FROM "sauce"');
    return result.rows;
  },

  async getOneSauce(id) {
    const result = await client.query(`SELECT
    s.*,
    ARRAY_AGG(
        jsonb_build_object(
            'comment_id', sc.id,
            'comment_text', sc.comment_text,
            'comment_created_at', sc.created_at,
            'user_id', u.id,
            'user_firstname', u.firstname,
            'user_lastname', u.lastname
        )
    ) AS comments
FROM
    SAUCE s
LEFT JOIN
    SAUCE_COMMENT sc ON s.id = sc.sauce_id
LEFT JOIN
    "user" u ON sc.user_id = u.id
WHERE
    s.id = $1
GROUP BY
    s.id;`, [id]);
    return result.rows[0];
  },

  async addSauce(sauce) {
    const result = await client.query('INSERT INTO "sauce" (name, description, spicyness, country, brand, picture) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [sauce.name, sauce.description, sauce.spicyness, sauce.contry, sauce.brand, sauce.picture]);
    return result.rows[0];
  },

  async deleteSauce(id) {
    const result = await client.query('DELETE FROM "sauce" WHERE id=$1', [id]);
    return result.rows[0];
  },

  async modifySauce(id, sauce) {
    const result = await client.query('UPDATE "sauce" SET name=$1, description=$2, spicyness=$3, contry=$5, brand=$6, picture=$7 WHERE id=$8 RETURNING *', [sauce.name, sauce.description, sauce.spicyness, sauce.note_id, sauce.contry, sauce.brand, sauce.picture, id]);
    return result.rows[0];
  },

  async searchSauceByName(name) {
    const result = await client.query(`SELECT * FROM "sauce" WHERE LOWER(name) LIKE '%${name}%'`);
    n;
    return result.rows;
  },

};
