import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create({
    driver_license,
    email,
    name,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { driver_license, email, name, password, username });

    this.users.push(user);
  }

  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex(element => element.id === user.id);

    this.users[userIndex] = user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(element => element.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find(element => element.id === id);
  }
}

export { UsersRepository };
