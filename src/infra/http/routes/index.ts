import { Router } from 'express';

import { carsRouter } from './cars.routes';
import { categoriesRouter } from './catregories.routes';
import { sessionsRouter } from './sessions.routes';
import { specificationRouter } from './specification.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/cars', carsRouter);
routes.use('/specifications', specificationRouter);

export { routes };
