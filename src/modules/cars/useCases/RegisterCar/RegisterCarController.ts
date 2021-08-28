import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';

import { RegisterCar } from './RegisterCar';

class RegisterCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      daily_rate,
      description,
      fine_amount,
      fk_category_id,
      license_plate,
      name,
    } = request.body as ICreateCarDTO;

    try {
      const registerCar = container.resolve(RegisterCar);

      await registerCar.execute({
        brand,
        daily_rate,
        description,
        fine_amount,
        fk_category_id,
        license_plate,
        name,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(error.statusCode).json({ error: error.message });
    }
  }
}

export { RegisterCarController };
