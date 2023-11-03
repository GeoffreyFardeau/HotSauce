import datamapper from '../models/noteDataMapper.js';


export default {

    async addNote(req,res) {
        const note = await datamapper.addNote(req.body);
        res.json(note);
    },

    async deleteNote (req,res) {
        const note = await datamapper.deleteNote (req.params.id);
        res.json(note);
    }



};
