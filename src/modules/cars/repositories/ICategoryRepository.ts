import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByname(name: string): Category;
  list(): Category[];
  create({ description, name }: ICreateCategoryDTO): Category;
}

export { ICategoryRepository, ICreateCategoryDTO };
