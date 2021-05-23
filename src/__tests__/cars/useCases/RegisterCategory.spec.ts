import { validate } from 'uuid';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '@modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/cars/repositories/memory/CategoriesRepository';
import { CreateCategoryUseCase } from '@modules/cars/useCases/CreateCategory/CreateCategoryUseCase';
import { AppException } from '@shared/errors/AppException';

let createCategory: CreateCategoryUseCase;
let categoriesRepository: ICategoriesRepository;
let category: ICreateCategoryDTO;

describe('UseCase - RegisterCategory', () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepository();
    createCategory = new CreateCategoryUseCase(categoriesRepository);

    category = {
      description: 'Esses carros são apenas para ricos!',
      name: 'Carros de Luxo',
    };
  });

  it('should be able to register new categories', async () => {
    await createCategory.execute(category);

    const response = await categoriesRepository.findByname(category.name);

    expect(response).toHaveProperty('id');
    expect(response.name).toMatch(category.name);
    expect(validate(response.id)).toBe(true);
  });

  it('should not be able to register duplicate categories with same name', async () => {
    await createCategory.execute(category);

    await expect(createCategory.execute(category)).rejects.toEqual(
      new AppException('Category already exists!', 400),
    );
  });
});
