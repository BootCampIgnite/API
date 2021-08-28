import {
  ICarsRepository,
  ICreateCarDTO,
} from '@modules/cars/repositories/ICarsRepository';
import { CarsRepository } from '@modules/cars/repositories/memory/CarsRepository';
import { RegisterCar } from '@modules/cars/useCases/RegisterCar/RegisterCar';
import { AppException } from '@shared/errors/AppException';

let registerCar: RegisterCar;
let carsRepository: ICarsRepository;
let carsProps: ICreateCarDTO;

describe('UseCase - RegisterCar', () => {
  beforeEach(async () => {
    carsRepository = new CarsRepository();
    registerCar = new RegisterCar(carsRepository);

    carsProps = {
      brand: 'Audi',
      daily_rate: 150.99,
      description: 'Carro veloz',
      fine_amount: 89.96,
      license_plate: 'XYZ1234',
      name: 'Audi 8709',
    };
  });

  it('should  be able to register cars', async () => {
    await registerCar.execute(carsProps);

    const car = await carsRepository.findByPlate('XYZ1234');

    expect(car).toBeTruthy();
    expect(car.is_available).toBe(true);
    expect(car.id).toBeTruthy();
    expect(car.brand).toBe('Audi');
  });

  it('should  not be able to register cars with duplicate plate', async () => {
    await registerCar.execute(carsProps);

    expect(registerCar.execute(carsProps)).rejects.toBe(
      new AppException('Car plate already exists', 409),
    );
  });

  it('should  not be able to register cars with duplicate name', async () => {
    await registerCar.execute(carsProps);

    carsProps.license_plate = 'AFX1234';

    expect(registerCar.execute(carsProps)).rejects.toBe(
      new AppException('Car name already exists', 409),
    );
  });
});
