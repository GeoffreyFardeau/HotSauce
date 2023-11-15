import datamapper from '../models/commentDataMapper.js';
import userDataMapper from '../models/userDataMapper.js';

export default {

  async getCommentBySauceId(req, res) {
    const comment = await datamapper.getCommentBySauceId(req.params.id);
    res.json(comment);
  },

  async addCommentOnSauce(req, res) {
    let comment = await datamapper.addCommentOnSauce(req.body);
    const user = req.body.user_id;
    const userFound = await userDataMapper.getUserById(user);
    comment = {
      comment_text: req.body.comment_text,
      user_firstname: userFound.firstname,
      user_lastname: userFound.lastname,
    };

    console.log(comment);
    res.json(comment);
  },
  async deleteCommentOnSauce(req, res) {
    const comment = await datamapper.deleteCommentOnSauce(req.params.id);
    res.json(comment);
  },
};
