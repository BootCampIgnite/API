import { inject, injectable } from 'tsyringe';
import { validate } from 'uuid';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { AppException } from '@shared/errors/AppException';

@injectable()
class RegisterCar {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,

    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(data: ICreateCarDTO): Promise<void> {
    const { license_plate, name, fk_category_id } = data;
    if (fk_category_id) {
      if (validate(fk_category_id)) {
        const category = await this.categoriesRepository.findById(
          fk_category_id,
        );

        if (!category) {
          throw new AppException('Category not found!', 404);
        }
      } else {
        throw new AppException('CategoryId is invalid!', 400);
      }
    }

    const carPlateExists = await this.carsRepository.findByPlate(license_plate);

    if (carPlateExists) {
      throw new AppException('Car plate already exists!', 409);
    }

    const carNameExists = await this.carsRepository.findByName(name);

    if (carNameExists) {
      throw new AppException('Car name already exists!', 409);
    }

    await this.carsRepository.create(data);
  }
}

export { RegisterCar };
