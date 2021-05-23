import { inject, injectable } from 'tsyringe';

import { AppException } from '@shared/errors/AppException';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoriesRepository';

@injectable()
class RegisterCategory {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByname(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppException('Category already exists!');
    }

    await this.categoryRepository.create({ description, name });
  }
}

export { RegisterCategory };
