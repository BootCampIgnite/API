import { v4 } from 'uuid';

import {
  ICarsRepository,
  ICreateCarDTO,
} from '@modules/cars/infra/typeorm/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/infra/typeorm/repositories/ICategoriesRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/memory/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/memory/CategoriesRepository';
import { RegisterCar } from '@modules/cars/useCases/RegisterCar/RegisterCar';
import { AppException } from '@shared/errors/AppException';

let registerCar: RegisterCar;
let carsRepository: ICarsRepository;
let carsProps: ICreateCarDTO;
let categoriesRepository: ICategoriesRepository;

describe('UseCase - RegisterCar', () => {
  beforeEach(async () => {
    carsRepository = new CarsRepository();
    categoriesRepository = new CategoriesRepository();
    registerCar = new RegisterCar(carsRepository, categoriesRepository);

    carsProps = {
      brand: 'Audi',
      daily_rate: 150.99,
      description: 'Carro veloz',
      fine_amount: 89.96,
      license_plate: 'XYZ1234',
      name: 'Audi 8709',
    };

    await categoriesRepository.create({
      description: 'Lorem Desc',
      name: 'DescName',
    });
  });

  it('should  be able to register cars', async () => {
    await registerCar.execute(carsProps);

    const car = await carsRepository.findByPlate('XYZ1234');

    expect(car).toBeTruthy();
    expect(car.is_available).toBe(true);
    expect(car.id).toBeTruthy();
    expect(car.brand).toBe('Audi');
  });

  it('should  not be able to register cars with duplicate plate', async () => {
    await registerCar.execute(carsProps);

    await expect(registerCar.execute(carsProps)).rejects.toEqual(
      new AppException('Car plate already exists!', 409),
    );
  });

  it('should  not be able to register cars with duplicate name', async () => {
    await registerCar.execute(carsProps);

    carsProps.license_plate = 'AFX1234';

    await expect(registerCar.execute(carsProps)).rejects.toEqual(
      new AppException('Car name already exists!', 409),
    );
  });

  it('should  not be able to register cars with invalid categoryId', async () => {
    await expect(
      registerCar.execute({ ...carsProps, fk_category_id: 'random' }),
    ).rejects.toEqual(new AppException('CategoryId is invalid!', 400));
  });

  it('should be able to register cars with categoryId', async () => {
    const category = await categoriesRepository.findByname('DescName');

    await registerCar.execute({ ...carsProps, fk_category_id: category.id });

    const car = await carsRepository.findByPlate('XYZ1234');

    expect(car).toBeTruthy();
    expect(car.fk_category_id).toBe(category.id);
  });

  it('should  not be able to register cars with unexists categoryId', async () => {
    await expect(
      registerCar.execute({ ...carsProps, fk_category_id: v4() }),
    ).rejects.toEqual(new AppException('Category not found!', 404));
  });
});
