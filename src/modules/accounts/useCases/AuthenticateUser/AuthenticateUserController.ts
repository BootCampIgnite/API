import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { AuthenticateUser } from './AuthenticateUser';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password }: ICreateUserDTO = request.body;

    try {
      const authenticateUser = container.resolve(AuthenticateUser);

      const token = await authenticateUser.execute({ email, password });

      return response.status(201).json(token);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { AuthenticateUserController };
