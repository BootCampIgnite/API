import { Router } from 'express';

import {
  listSpecificationController,
  createSpecificationController,
} from '../factories/MakeSpecificationsController';
import { EnsureAuthenticate } from '../middlewares';
import { EnsureAdminAccess } from '../middlewares/EnsureAdminAccess';

const specificationRouter = Router();

specificationRouter.use([EnsureAuthenticate.handle, EnsureAdminAccess.handle]);

specificationRouter.get('/', listSpecificationController.handle);

specificationRouter.post('/', createSpecificationController.handle);

export { specificationRouter };
