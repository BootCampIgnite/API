import { CreateSpecificationController } from '@modules/cars/useCases/CreateSpecification/CreateSpecificationController';
import { ListSpecificationController } from '@modules/cars/useCases/ListSpecifications/ListSpecificationController';

const listSpecificationController = new ListSpecificationController();
const createSpecificationController = new CreateSpecificationController();

export { listSpecificationController, createSpecificationController };
