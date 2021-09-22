import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '@core/BaseEntity';

import { Car } from './Car';

@Entity('categories')
class Category extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  // Relationships

  @OneToMany(() => Car, car => car.category)
  cars: Car[];
}

export { Category };
