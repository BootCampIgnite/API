import 'reflect-metadata';
import 'express-async-error';

import express from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';

import '../../shared/container';
import '../database';

import ApiSchema from '../../shared/docs/swagger.json';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(routes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(ApiSchema));

export { app };
