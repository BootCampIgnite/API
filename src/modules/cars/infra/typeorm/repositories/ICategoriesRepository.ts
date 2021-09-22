import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { Category } from '../entities/Category';

interface ICategoriesRepository {
  findByname(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ description, name }: ICreateCategoryDTO): Promise<void>;
  findById(id: string): Promise<Category | undefined>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
