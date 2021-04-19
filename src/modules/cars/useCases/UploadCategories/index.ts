import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';
import { UploadCategoriesController } from './UploadCategoriesController';
import { UploadCategoriesUseCase } from './UploadCategoriesUseCase';

const categoryRepository = CategoryRepository.getInstance();

const uploadCategoriesUseCase = new UploadCategoriesUseCase(categoryRepository);

const uploadCategoriesController = new UploadCategoriesController(
  uploadCategoriesUseCase,
);

export { uploadCategoriesController };
