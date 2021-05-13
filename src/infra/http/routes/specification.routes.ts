import { Router } from 'express';

import { CreateSpecificationController } from '../../../modules/cars/useCases/CreateSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../../../modules/cars/useCases/ListSpecifications/ListSpecificationController';
import { EnsureAuthenticate } from '../middlewares';

const specificationRouter = Router();

specificationRouter.use(EnsureAuthenticate.handle);

const listSpecificationController = new ListSpecificationController();
specificationRouter.get('/', listSpecificationController.handle);

const createSpecificationController = new CreateSpecificationController();
specificationRouter.post('/', createSpecificationController.handle);

export { specificationRouter };
