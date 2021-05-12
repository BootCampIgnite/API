import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppException } from '../../../../shared/errors/AppException';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class RegisterUser {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}

  async execute({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppException('User Already Exists!');
    }

    const passwordHashed = await hash(password, 8);

    await this.userRepository.create({
      driver_license,
      email,
      name,
      password: passwordHashed,
      username,
    });
  }
}

export { RegisterUser };
