import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../../../core/BaseEntity';

@Entity('categories')
class Category extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
}

export { Category };
