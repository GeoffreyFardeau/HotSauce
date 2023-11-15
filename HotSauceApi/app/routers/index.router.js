import { Router } from 'express';
import controllerWrapper from '../middlewares/controller.wrapper.js';
import NotFoundError from '../errors/notfound.error.js';
import errorHandler from '../middlewares/error.middleware.js';
import sauceController from '../controllers/sauce.controller.js';
import logger from '../helpers/logger.js';
import noteController from '../controllers/note.controller.js';
import authController from '../controllers/auth.controller.js';
import commentController from '../controllers/comment.controller.js';

const router = Router();

router.use((req, _, next) => {
  logger.http(req.url, { method: req.method, ip: req.ip, os: req.headers['user-agent'] });
  next();
});

router.route('/sauces')
  .post(controllerWrapper(sauceController.addSauce))
  .get(controllerWrapper(sauceController.getAllSauces));

router.route('/searchSauce').get(controllerWrapper(sauceController.searchSauceByName));

router.route('/notes')
  .post(controllerWrapper(noteController.addNote));

router.route('/register')
  .post(controllerWrapper(authController.register));

router.route('/login')
  .post(controllerWrapper(authController.login));

router.route('/sauces/:id')
  .delete(controllerWrapper(sauceController.deleteSauce))
  .get(controllerWrapper(sauceController.getOneSauce))
  .delete(controllerWrapper(sauceController.deleteSauce));

router.route('/comment')
  .post(controllerWrapper(commentController.addCommentOnSauce))
  .delete(controllerWrapper(commentController.deleteCommentOnSauce));

router.use((_, __, next) => {
  next(new NotFoundError('404 not found'));
});

router.use(errorHandler);

export default router;
