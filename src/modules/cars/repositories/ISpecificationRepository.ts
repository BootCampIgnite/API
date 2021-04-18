import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): Specification;
  findByname(name: string): Specification;
  list(): Specification[];
}

export { ISpecificationRepository, ICreateSpecificationDTO };
