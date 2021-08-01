import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findCarByName(name: string): Promise<Car>;
  findCarByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository };
