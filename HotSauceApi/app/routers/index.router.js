import { Router } from 'express';
import controllerWrapper from '../middlewares/controller.wrapper.js';
import NotFoundError from '../errors/notfound.error.js';
import errorHandler from '../middlewares/error.middleware.js';
import sauceController from '../controllers/sauce.controller.js';
import logger from '../helpers/logger.js';
import noteController from '../controllers/note.controller.js';
import authController from '../controllers/auth.controller.js';




const router = Router();

router.use((req, _, next) => {
  logger.http(req.url, { method: req.method, ip: req.ip, os: req.headers['user-agent'] });
  next();
});

router.route('/sauces')
.post(controllerWrapper(sauceController.addSauce))
.get(controllerWrapper(sauceController.getAllSauces));



router.route('/notes')
.post(controllerWrapper(noteController.addNote))


router.route('/register')
.post(controllerWrapper(authController.register));


router.use((_, __, next) => {
  next(new NotFoundError('404 not found'));
});

router.use(errorHandler);

export default router;
