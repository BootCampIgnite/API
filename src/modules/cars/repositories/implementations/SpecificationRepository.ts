import { Specification } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ description, name }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
      created_at: new Date(),
    });

    this.specification.push(specification);

    return specification;
  }

  list(): Specification[] {
    return this.specification;
  }

  findByname(name: string): Specification {
    const specification = this.specification.find(
      element => element.name === name,
    );

    return specification;
  }
}

export { SpecificationRepository };
