import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { CarsRepository } from '@modules/cars/repositories/memory/CarsRepository';
import { RegisterCar } from '@modules/cars/useCases/RegisterCar/RegisterCar';
import { AppException } from '@shared/errors/AppException';

let registerCar: RegisterCar;
let carsRepository: ICarsRepository;
let carsProps: ICreateCarDTO;

describe('UseCase - RegisterCar', () => {
  beforeEach(() => {
    carsRepository = new CarsRepository();
    registerCar = new RegisterCar(carsRepository);

    carsProps = {
      brand: 'Fiat Uno',
      daily_rate: 12,
      description: 'Carros Rápido feito uma diarreia',
      fine_amount: 2034,
      license_plate: 'AZX-234',
      name: 'Meu Uno Amarelo',
    };
  });

  it('should be able to register a new car', async () => {
    await registerCar.execute(carsProps);

    const response = await carsRepository.findCarByLicensePlate(
      carsProps.license_plate,
    );

    expect(response).toBeTruthy();
    expect(response).toHaveProperty('id');
    expect(response.description).toMatch(carsProps.description);
  });

  it('should not be able to register a new car with same License Plate', async () => {
    await registerCar.execute(carsProps);

    carsProps.name = 'Hilux da Massa';

    await expect(registerCar.execute(carsProps)).rejects.toEqual(
      new AppException('License Plate Already Exists!', 400),
    );
  });

  it('should not be able to register a new car with same Name', async () => {
    await registerCar.execute(carsProps);

    carsProps.license_plate = 'ZAV-987';

    await expect(registerCar.execute(carsProps)).rejects.toEqual(
      new AppException('Car Name Already Exists!', 400),
    );
  });
});
