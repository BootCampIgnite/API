import { Router } from 'express';
import multer from 'multer';

import {
  createCategoryContoller,
  listCategoriesController,
  uploadCategoriesController,
} from '../modules/cars/useCases';

const categoriesRouter = Router();
const upload = multer({
  dest: './uploads',
});

categoriesRouter.post('/', (request, response) =>
  createCategoryContoller.handle(request, response),
);

categoriesRouter.get('/', (request, response) =>
  listCategoriesController.handle(request, response),
);

categoriesRouter.post('/upload', upload.single('file'), (request, response) =>
  uploadCategoriesController.handle(request, response),
);

export { categoriesRouter };
