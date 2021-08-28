import { Router } from 'express';

import { registerCarController } from '../factories/MakeCarsController';

const carsRouter = Router();

carsRouter.post('/', registerCarController.handle);

export { carsRouter };
