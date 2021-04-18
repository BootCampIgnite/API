import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRouter = Router();
const specificationRepository = new SpecificationRepository();

specificationRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );

  const specification = createSpecificationService.execute({
    name,
    description,
  });

  return response.status(201).json(specification);
});

specificationRouter.get('/', (request, response) => {
  const specification = specificationRepository.list();

  return response.json(specification);
});

export { specificationRouter };
