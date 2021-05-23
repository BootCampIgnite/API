import { Router } from 'express';
import multer from 'multer';

import {
  createCategoryContoller,
  listCategoriesController,
  uploadCategoriesController,
} from '../factories/MakeCategoriesController';

const categoriesRouter = Router();
const upload = multer({
  dest: './uploads',
});

categoriesRouter.post('/', createCategoryContoller.handle);

categoriesRouter.get('/', listCategoriesController.handle);

categoriesRouter.post(
  '/upload',
  upload.single('file'),
  uploadCategoriesController.handle,
);

export { categoriesRouter };
