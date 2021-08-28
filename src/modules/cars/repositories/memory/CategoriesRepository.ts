import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  async findById(id: string): Promise<Category> {
    return this.categories.find(element => element.id === id);
  }

  async findByname(name: string): Promise<Category> {
    return this.categories.find(element => element.name === name);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { description, name });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
