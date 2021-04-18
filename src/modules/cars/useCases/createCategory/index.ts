import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';
import { CreateCategoryContoller } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoryRepository = CategoryRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryContoller = new CreateCategoryContoller(
  createCategoryUseCase,
);

export { createCategoryContoller };
