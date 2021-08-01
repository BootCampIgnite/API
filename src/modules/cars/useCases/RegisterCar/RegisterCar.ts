import { injectable } from 'tsyringe';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppException } from '@shared/errors/AppException';

@injectable()
class RegisterCar {
  constructor(private readonly carsRepository: ICarsRepository) {}
  async execute({
    brand,
    daily_rate,
    description,
    fine_amount,
    is_available,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<void> {
    const licenseAlreadyExists =
      await this.carsRepository.findCarByLicensePlate(license_plate);

    if (licenseAlreadyExists) {
      throw new AppException('License Plate Already Exists!', 400);
    }

    const nameAlreadyExists = await this.carsRepository.findCarByName(name);

    if (nameAlreadyExists) {
      throw new AppException('Car Name Already Exists!', 400);
    }

    await this.carsRepository.create({
      brand,
      daily_rate,
      description,
      fine_amount,
      is_available,
      license_plate,
      name,
    });
  }
}

export { RegisterCar };
