import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatar } from './UpdateUserAvatar';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar_file = request.file.filename;

    try {
      const updateUserAvatar = container.resolve(UpdateUserAvatar);

      await updateUserAvatar.execute({ avatar_file, user_id: id });

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { UpdateUserAvatarController };
