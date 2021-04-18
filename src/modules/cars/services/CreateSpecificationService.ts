import { Specification } from '../model/Specification';
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from '../repositories/ISpecificationRepository';

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ description, name }: ICreateSpecificationDTO): Specification {
    const specificationAlreadyExists = this.specificationRepository.findByname(
      name,
    );

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists!');
    }

    const specification = this.specificationRepository.create({
      description,
      name,
    });

    return specification;
  }
}

export { CreateSpecificationService };
