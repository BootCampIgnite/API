import { inject, injectable } from 'tsyringe';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppException } from '@shared/errors/AppException';

@injectable()
class RegisterCar {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute(data: ICreateCarDTO): Promise<void> {
    const { license_plate, name } = data;

    const carPlateExists = await this.carsRepository.findByPlate(license_plate);

    if (carPlateExists) {
      throw new AppException('Car plate already exists', 409);
    }

    const carNameExists = await this.carsRepository.findByName(name);

    if (carNameExists) {
      throw new AppException('Car name already exists', 409);
    }

    await this.carsRepository.create(data);
  }
}

export { RegisterCar };
