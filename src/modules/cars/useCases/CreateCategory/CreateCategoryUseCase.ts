import { inject, injectable } from 'tsyringe';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoriesRepository';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByname(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    await this.categoryRepository.create({ description, name });
  }
}

export { CreateCategoryUseCase };
