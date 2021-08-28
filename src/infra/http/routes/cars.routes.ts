import { Router } from 'express';

import { registerCarController } from '../factories/MakeCarsController';
import { EnsureAuthenticate } from '../middlewares';
import { EnsureAdminAccess } from '../middlewares/EnsureAdminAccess';

const carsRouter = Router();

carsRouter.post(
  '/',
  EnsureAuthenticate.handle,
  EnsureAdminAccess.handle,
  registerCarController.handle,
);

export { carsRouter };
