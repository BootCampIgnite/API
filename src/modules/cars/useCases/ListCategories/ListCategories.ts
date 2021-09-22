import { inject, injectable } from 'tsyringe';

import { Category } from '../../infra/typeorm/entities/Category';
import { ICategoriesRepository } from '../../infra/typeorm/repositories/ICategoriesRepository';

@injectable()
class ListCategories {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();
    return categories;
  }
}

export { ListCategories };
