import client from './client.js';

export default {

    async getAllSauces() {
        const result = await client.query('SELECT * FROM "sauce"');
        return result.rows;
    },

    async getOneSauce(id) {
        const result = await client.query('SELECT * FROM "sauce" WHERE id=$1', [id]);
        return result.rows[0];
    },

    async addSauce(sauce) {
        const result = await client.query('INSERT INTO "sauce" (name, description, spicyness, note_id, country, brand, picture) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [sauce.name, sauce.description, sauce.spicyness, sauce.note_id, sauce.contry, sauce.brand, sauce.picture]);
        return result.rows[0];
    },

    async deleteSauce(id) { 
        const result = await client.query('DELETE FROM "sauce" WHERE id=$1', [id]);
        return result.rows[0];
    },

    async modifySauce(id, sauce) {
        const result = await client.query('UPDATE "sauce" SET name=$1, description=$2, spicyness=$3, note_id=$4, contry=$5, brand=$6, picture=$7 WHERE id=$8 RETURNING *', [sauce.name, sauce.description, sauce.spicyness, sauce.note_id, sauce.contry, sauce.brand, sauce.picture, id]);
        return result.rows[0];
    }


};
