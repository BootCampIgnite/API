import { ListSpecificationController } from '@modules/cars/useCases/ListSpecifications/ListSpecificationController';
import { CreateSpecificationController } from '@modules/cars/useCases/RegisterSpecification/RegisterSpecificationController';

const listSpecificationController = new ListSpecificationController();
const createSpecificationController = new CreateSpecificationController();

export { listSpecificationController, createSpecificationController };
