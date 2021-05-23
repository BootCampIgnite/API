import { CreateCategoryController } from '@modules/cars/useCases/CreateCategory/CreateCategoryController';
import { ListCategoriesController } from '@modules/cars/useCases/ListCategories/ListCategoriesController';
import { UploadCategoriesController } from '@modules/cars/useCases/UploadCategories/UploadCategoriesController';

const createCategoryContoller = new CreateCategoryController();
const uploadCategoriesController = new UploadCategoriesController();
const listCategoriesController = new ListCategoriesController();

export {
  createCategoryContoller,
  uploadCategoriesController,
  listCategoriesController,
};
