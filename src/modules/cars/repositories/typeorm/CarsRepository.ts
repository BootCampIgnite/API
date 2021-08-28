import { getRepository, Repository } from 'typeorm';

import { Car } from '../../entities/Car';
import { ICarsRepository, ICreateCarDTO } from '../ICarsRepository';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async findByPlate(license_plate: string): Promise<Car> {
    return this.repository.findOne({ license_plate });
  }

  async findById(id: string): Promise<Car> {
    return this.repository.findOne(id);
  }

  async findByName(name: string): Promise<Car> {
    return this.repository.findOne({ name });
  }

  async list(): Promise<Car[]> {
    return this.repository.find();
  }

  async create(data: ICreateCarDTO): Promise<void> {
    const car = this.repository.create(data);

    await this.repository.save(car);
  }
}

export { CarsRepository };
