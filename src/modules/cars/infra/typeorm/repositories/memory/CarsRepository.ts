import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepository implements ICarsRepository {
  private cars: Car[] = [];

  async list(): Promise<Car[]> {
    return this.cars;
  }

  async findByPlate(plate: string): Promise<Car> {
    return this.cars.find(car => car.license_plate === plate);
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find(car => car.id === id);
  }

  async findByName(name: string): Promise<Car> {
    return this.cars.find(car => car.name === name);
  }

  async create(data: ICreateCarDTO): Promise<void> {
    this.cars.push(Object.assign(new Car(), { ...data, is_available: true }));
  }
}

export { CarsRepository };
