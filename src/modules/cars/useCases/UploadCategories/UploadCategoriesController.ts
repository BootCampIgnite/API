import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadCategories } from './UploadCategories';

class UploadCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    try {
      const uploadCategories = container.resolve(UploadCategories);

      await uploadCategories.execute(file);

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { UploadCategoriesController };
