import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@configs/upload';
import { RegisterUserController } from '@modules/accounts/useCases/RegisterUser/RegisterUserController';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController';

import { EnsureAuthenticate } from '../middlewares/EnsureAuthenticate';

const usersRouter = Router();
const uploadAvatar = multer(uploadConfig.upload('./uploads/avatar'));

const registerUserController = new RegisterUserController();
usersRouter.post('/', registerUserController.handle);

usersRouter.use(EnsureAuthenticate.handle);

const updateUserController = new UpdateUserAvatarController();
usersRouter.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  updateUserController.handle,
);

export { usersRouter };
