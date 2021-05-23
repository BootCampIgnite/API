import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { RegisterCategory } from './RegisterCategory';

class RegisterCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const registerCategory = container.resolve(RegisterCategory);

      await registerCategory.execute({ name, description });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { RegisterCategoryController };
