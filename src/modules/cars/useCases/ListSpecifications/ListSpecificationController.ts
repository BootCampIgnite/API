import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecifications } from './ListSpecifications';

class ListSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listSpecifications = container.resolve(ListSpecifications);

      const specification = await listSpecifications.execute();

      return response.json(specification);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListSpecificationController };
