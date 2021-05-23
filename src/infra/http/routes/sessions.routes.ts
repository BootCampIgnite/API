import { Router } from 'express';

import { authenticateUserController } from '../factories/MakeSessionController';

const sessionsRouter = Router();

sessionsRouter.post('/', authenticateUserController.handle);

export { sessionsRouter };
