import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../../modules/cars/useCases/CreateCategory/CreateCategoryController';
import { ListCategoriesController } from '../../../modules/cars/useCases/ListCategories/ListCategoriesController';
import { UploadCategoriesController } from '../../../modules/cars/useCases/UploadCategories/UploadCategoriesController';

const categoriesRouter = Router();
const upload = multer({
  dest: './uploads',
});

const createCategoryContoller = new CreateCategoryController();
categoriesRouter.post('/', createCategoryContoller.handle);

const listCategoriesController = new ListCategoriesController();
categoriesRouter.get('/', listCategoriesController.handle);

const uploadCategoriesController = new UploadCategoriesController();
categoriesRouter.post(
  '/upload',
  upload.single('file'),
  uploadCategoriesController.handle,
);

export { categoriesRouter };
