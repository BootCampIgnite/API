import { container } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/infra/typeorm/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/typeorm/UsersRepository';
import { ICarsRepository } from '@modules/cars/infra/typeorm/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/infra/typeorm/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/ISpecificationsRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/typeorm/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/typeorm/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/typeorm/SpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
