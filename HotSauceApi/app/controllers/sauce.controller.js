import datamapper from '../models/sauceDataMapper.js';

export default {

  async getAllSauces(req, res) {
    const sauces = await datamapper.getAllSauces();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.json(sauces);
  },

  async getOneSauce(req, res) {
    const sauce = await datamapper.getOneSauce(req.params.id);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.json(sauce);
  },

  async addSauce(req, res) {
    const sauce = await datamapper.addSauce(req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.json(sauce);
  },
  async deleteSauce(req, res) {
    const sauce = await datamapper.deleteSauce(req.params.id);
    res.json(sauce);
  },

  async modifySauce(req, res) {
    const sauce = await datamapper.modifySauce(req.params.id, req.body);
    res.json(sauce);
  },

};
