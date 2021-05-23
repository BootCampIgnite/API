import { Router } from 'express';

import { AuthenticateUserController } from '@modules/accounts/useCases/AuthenticateUser/AuthenticateUserController';

const sessionsRouter = Router();

const authenticateUserController = new AuthenticateUserController();
sessionsRouter.post('/', authenticateUserController.handle);

export { sessionsRouter };
