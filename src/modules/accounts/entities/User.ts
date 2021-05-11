import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../../../core/BaseEntity';

@Entity('users')
class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  driver_license: string;

  @Column({ default: false })
  is_admin: boolean;
}

export { User };
