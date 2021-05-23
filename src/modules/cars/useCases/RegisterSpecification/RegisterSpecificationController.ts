import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RegisterSpecification } from './CreateSpecification';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    try {
      const registerSpecification = container.resolve(RegisterSpecification);

      const specification = await registerSpecification.execute({
        name,
        description,
      });

      return response.status(201).json(specification);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateSpecificationController };
