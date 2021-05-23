import { inject, injectable } from 'tsyringe';

import { AppException } from '@shared/errors/AppException';

import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from '../../repositories/ISpecificationsRepository';

@injectable()
class RegisterSpecification {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository,
  ) {}

  async execute({
    description,
    name,
  }: ICreateSpecificationsDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByname(name);

    if (specificationAlreadyExists) {
      throw new AppException('Specification Already Exists!');
    }

    await this.specificationRepository.create({
      description,
      name,
    });
  }
}

export { RegisterSpecification };
