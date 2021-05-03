import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadCategoriesUseCase } from './UploadCategoriesUseCase';

class UploadCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const uploadCategoriesUseCase = container.resolve(UploadCategoriesUseCase);

    await uploadCategoriesUseCase.execute(file);

    return response.send();
  }
}

export { UploadCategoriesController };
