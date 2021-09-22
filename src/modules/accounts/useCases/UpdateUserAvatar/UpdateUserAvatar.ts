import { inject, injectable } from 'tsyringe';

import { AppException } from '@shared/errors/AppException';
import { deleteFile } from '@shared/utils';

import { IUsersRepository } from '../../infra/typeorm/repositories/IUsersRepository';

type IRequest = {
  user_id: string;
  avatar_file: string;
};

@injectable()
class UpdateUserAvatar {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    if (!avatar_file) {
      throw new AppException('Avatar file is required', 400);
    }

    const user = await this.userRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./uploads/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.userRepository.save(user);
  }
}

export { UpdateUserAvatar };
