import { Specification } from '../../entities/Specification';
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from '../../repositories/ISpecificationRepository';

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  async execute({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByname(
      name,
    );

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists!');
    }

    await this.specificationRepository.create({
      description,
      name,
    });
  }
}

export { CreateSpecificationUseCase };
