import { Column, Entity } from 'typeorm';

import { BaseEntity } from '@core/BaseEntity';

@Entity('specifications')
class Specification extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
}

export { Specification };
