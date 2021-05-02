import { Router } from 'express';

import {
  createSpecificationController,
  listSpecificationController,
} from '../../../modules/cars/useCases';

const specificationRouter = Router();

specificationRouter.post('/', (request, response) =>
  createSpecificationController.handle(request, response),
);

specificationRouter.get('/', (request, response) =>
  listSpecificationController.handle(request, response),
);

export { specificationRouter };
