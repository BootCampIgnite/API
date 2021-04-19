import { Request, Response } from 'express';

import { UploadCategoriesUseCase } from './UploadCategoriesUseCase';

class UploadCategoriesController {
  constructor(private uploadCategoriesUseCase: UploadCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.uploadCategoriesUseCase.execute(file);

    return response.send();
  }
}

export { UploadCategoriesController };
