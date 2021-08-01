import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategories } from './ListCategories';

type ICreatetest = {
  id?: string;
  name: string;
  user?: {
    id: string;
  };
};

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listCategories = container.resolve(ListCategories);

      const categories = await listCategories.execute();

      return response.json(categories);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListCategoriesController };
