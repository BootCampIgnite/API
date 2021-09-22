import { inject, injectable } from 'tsyringe';

import { Specification } from '../../infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '../../infra/typeorm/repositories/ISpecificationsRepository';

@injectable()
class ListSpecifications {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}

export { ListSpecifications };
