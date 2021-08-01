import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepository implements ICarsRepository {
  private cars: Car[];

  constructor() {
    this.cars = [];
  }

  async findCarByName(name: string): Promise<Car> {
    const car = this.cars.find(element => element.name === name);

    return car;
  }

  async findCarByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find(
      element => element.license_plate === license_plate,
    );

    return car;
  }

  async create({
    brand,
    daily_rate,
    description,
    fine_amount,
    is_available,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      brand,
      daily_rate,
      description,
      fine_amount,
      is_available,
      license_plate,
      name,
    });

    this.cars.push(car);
  }
}

export { CarsRepository };
