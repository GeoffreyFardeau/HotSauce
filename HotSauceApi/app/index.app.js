import express from 'express';
import router from './routers/index.router.js';
import passport from 'passport';
import passportConfig from './middlewares/passportConfig.js';
import cookieParser from 'cookie-parser';
passportConfig(passport);
const app = express();
app.use(cookieParser());
// middleaware pour récupérer un body au format JSON
app.use(express.json());
// On peut donner la possibilité d'utiliser les 2 format dans la même app
app.use(express.urlencoded({ extended: true }));

app.use(router);

export default app;
