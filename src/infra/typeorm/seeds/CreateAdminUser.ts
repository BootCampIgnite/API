import 'dotenv/config';

import { hash } from 'bcrypt';
import { getRepository } from 'typeorm';
import { Seeder } from 'typeorm-seeding';

import { User } from '@modules/accounts/infra/typeorm/entities/User';

class CreateAccountAdmin implements Seeder {
  public async run(): Promise<void> {
    const usersRepository = getRepository(User);

    const passwordHashed = await hash('admin', 8);

    const user = Object.assign(new User(), {
      is_admin: true,
      name: 'Administrador',
      username: 'admin',
      password: passwordHashed,
      email: 'admin@agilitytelecom.com',
      driver_license: '123456789',
    });

    await usersRepository.save(user);
  }
}

export default CreateAccountAdmin;
