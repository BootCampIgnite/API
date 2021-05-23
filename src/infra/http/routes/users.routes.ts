import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@configs/upload';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController';

import { registerUserController } from '../factories/MakeUsersController';
import { EnsureAuthenticate } from '../middlewares/EnsureAuthenticate';

const updateUserController = new UpdateUserAvatarController();

const usersRouter = Router();
const uploadAvatar = multer(uploadConfig.upload('./uploads/avatar'));

usersRouter.post('/', registerUserController.handle);

usersRouter.use(EnsureAuthenticate.handle);

usersRouter.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  updateUserController.handle,
);

export { usersRouter };
