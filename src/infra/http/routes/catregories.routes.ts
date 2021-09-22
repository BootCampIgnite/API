import { Router } from 'express';
import multer from 'multer';

import { app } from '../app';
import {
  registerCategoryController,
  listCategoriesController,
  uploadCategoriesController,
} from '../factories/MakeCategoriesController';
import { EnsureAuthenticate } from '../middlewares';
import { EnsureAdminAccess } from '../middlewares/EnsureAdminAccess';

const categoriesRouter = Router();
const upload = multer({
  dest: './uploads',
});

categoriesRouter.get('/', listCategoriesController.handle);

categoriesRouter.use([EnsureAuthenticate.handle, EnsureAdminAccess.handle]);

categoriesRouter.post('/', registerCategoryController.handle);

categoriesRouter.post(
  '/upload',
  upload.single('file'),
  uploadCategoriesController.handle,
);

export { categoriesRouter };
