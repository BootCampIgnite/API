import { ICreateSpecificationsDTO } from '../../../dtos/ICreateSpecificationsDTO';
import { Specification } from '../entities/Specification';

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationsDTO): Promise<void>;
  findByname(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
