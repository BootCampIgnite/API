import { ICreateCarDTO } from '../../../dtos/ICreateCarDTO';
import { Car } from '../entities/Car';

interface ICarsRepository {
  list(): Promise<Car[]>;
  create(data: ICreateCarDTO): Promise<void>;
  findByPlate(plate: string): Promise<Car | undefined>;
  findById(id: string): Promise<Car | undefined>;
  findByName(name: string): Promise<Car | undefined>;
}

export { ICarsRepository, ICreateCarDTO };
