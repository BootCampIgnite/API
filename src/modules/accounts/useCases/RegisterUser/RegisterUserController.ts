import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { created } from '../../../../core/HttpResponse';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { RegisterUser } from './RegisterUser';

class RegisterUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { driver_license, email, name, password, username }: ICreateUserDTO =
      request.body;

    try {
      const createCategoryUseCase = container.resolve(RegisterUser);

      await createCategoryUseCase.execute({
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
