import { Router } from 'express';

import {
  listSpecificationController,
  createSpecificationController,
} from '../factories/MakeSpecificationsController';
import { EnsureAuthenticate } from '../middlewares';

const specificationRouter = Router();

specificationRouter.use(EnsureAuthenticate.handle);

specificationRouter.get('/', listSpecificationController.handle);

specificationRouter.post('/', createSpecificationController.handle);

export { specificationRouter };
