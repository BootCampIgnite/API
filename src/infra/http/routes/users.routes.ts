import { Router } from 'express';

import { RegisterUserController } from '../../../modules/accounts/useCases/RegisterUser/RegisterUserController';

const usersRouter = Router();

const registerUserController = new RegisterUserController();
usersRouter.post('/', registerUserController.handle);

export { usersRouter };
