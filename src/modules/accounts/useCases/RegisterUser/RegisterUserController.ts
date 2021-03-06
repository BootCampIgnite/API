import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { RegisterUser } from './RegisterUser';

class RegisterUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { driver_license, email, name, password, username }: ICreateUserDTO =
      request.body;

    try {
      const registerUser = container.resolve(RegisterUser);

      await registerUser.execute({
        driver_license,
        email,
        name,
        password,
        username,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { RegisterUserController };
