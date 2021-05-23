import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/repositories/memory/UsersRepository';
import { AuthenticateUser } from '@modules/accounts/useCases/AuthenticateUser/AuthenticateUser';
import { RegisterUser } from '@modules/accounts/useCases/RegisterUser/RegisterUser';
import { AppException } from '@shared/errors/AppException';

let usersRepository: IUsersRepository;
let registerUser: RegisterUser;
let user: ICreateUserDTO;
let authenticateUser: AuthenticateUser;

describe('UseCase - AuthenticateUser', () => {
  beforeEach(() => {
    usersRepository = new UsersRepository();
    registerUser = new RegisterUser(usersRepository);
    authenticateUser = new AuthenticateUser(usersRepository);

    user = {
      driver_license: 'ZNSD67',
      email: 'mpgx5.c@gmail.com',
      name: 'Mateus Garcia',
      password: '1234567890',
      username: 'mpgxc',
    };
  });

  it('should be able to register a user', async () => {
    await registerUser.execute(user);

    const userFinded = await usersRepository.findByEmail(user.email);

    expect(userFinded).toBeTruthy();

    expect(userFinded).toHaveProperty('id');
  });

  it('should be able to authenticate a user', async () => {
    await registerUser.execute(user);

    const response = await authenticateUser.execute({
      email: user.email,
      password: user.password,
    });

    expect(response).toHaveProperty('token');
    expect(response.token).toBeTruthy();

    expect(response).toEqual(
      expect.objectContaining({ token: expect.any(String) }),
    );
  });

  it('should not be able to authenticate with worng infos', async () => {
    await registerUser.execute(user);

    await expect(
      authenticateUser.execute({
        email: user.email,
        password: `4343434345tygh`,
      }),
    ).rejects.toEqual(new AppException('Email or password incorrect!', 401));

    await expect(
      authenticateUser.execute({
        email: 'email@aleatorio',
        password: `4343434345tygh`,
      }),
    ).rejects.toEqual(new AppException('Email or password incorrect!', 401));
  });
});
