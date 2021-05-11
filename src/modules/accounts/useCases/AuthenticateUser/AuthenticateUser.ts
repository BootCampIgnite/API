import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

type IRequest = {
  email: string;
  password: string;
};

type IResponse = {
  user: Omit<ICreateUserDTO, 'passwword'>;
  token: string;
};

@injectable()
class AuthenticateUser {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect!');
    }

    const passwordHashed = await compare(password, user.password);

    if (!passwordHashed) {
      throw new Error('Email or password incorrect!');
    }

    const token = sign({}, 'sasasas', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUser };
