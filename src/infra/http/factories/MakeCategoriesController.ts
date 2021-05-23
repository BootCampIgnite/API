import { ListCategoriesController } from '@modules/cars/useCases/ListCategories/ListCategoriesController';
import { RegisterCategoryController } from '@modules/cars/useCases/RegisterCategory/RegisterCategoryController';
import { UploadCategoriesController } from '@modules/cars/useCases/UploadCategories/UploadCategoriesController';

const registerCategoryController = new RegisterCategoryController();
const uploadCategoriesController = new UploadCategoriesController();
const listCategoriesController = new ListCategoriesController();

export {
  registerCategoryController,
  uploadCategoriesController,
  listCategoriesController,
};
