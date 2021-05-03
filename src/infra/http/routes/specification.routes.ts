import { Router } from 'express';

import { CreateSpecificationController } from '../../../modules/cars/useCases/CreateSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../../../modules/cars/useCases/ListSpecifications/ListSpecificationController';

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRouter.post('/', createSpecificationController.handle);

const listSpecificationController = new ListSpecificationController();
specificationRouter.get('/', listSpecificationController.handle);

export { specificationRouter };
