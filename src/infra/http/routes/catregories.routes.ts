import { Router } from 'express';
import multer from 'multer';

// import {
//   listCategoriesController,
//   uploadCategoriesController,
// } from '../../../modules/cars/useCases';
import { CreateCategoryController } from '../../../modules/cars/useCases/CreateCategory/CreateCategoryController';

const categoriesRouter = Router();
// const upload = multer({
//   dest: './uploads',
// });

const createCategoryContoller = new CreateCategoryController();
categoriesRouter.post('/', createCategoryContoller.handle);

// categoriesRouter.get('/', (request, response) =>
//   listCategoriesController().handle(request, response),
// );

// categoriesRouter.post('/upload', upload.single('file'), (request, response) =>
//   uploadCategoriesController().handle(request, response),
// );

export { categoriesRouter };
