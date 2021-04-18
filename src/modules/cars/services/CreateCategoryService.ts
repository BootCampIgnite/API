import { Category } from '../model/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../repositories/ICategoryRepository';

class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ name, description }: ICreateCategoryDTO): Category {
    const categoryAlreadyExists = this.categoryRepository.findByname(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    const category = this.categoryRepository.create({
      description,
      name,
    });

    return category;
  }
}

export { CreateCategoryService };
