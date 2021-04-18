import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/implementations/CategoryRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  const category = createCategoryService.execute({
    name,
    description,
  });

  return response.status(201).json(category);
});

categoriesRouter.get('/', (request, response) => {
  const categories = categoryRepository.list();

  return response.json(categories);
});

export { categoriesRouter };
