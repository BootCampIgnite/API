import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from '@core/BaseEntity';

import { Category } from './Category';

@Entity('cars')
class Car extends BaseEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  daily_rate: number;

  @Column({ default: true })
  is_available: boolean;

  @Column({ unique: true })
  license_plate: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  fine_amount: number;

  @Column()
  brand: string;

  @Column({ nullable: true })
  fk_category_id: string;

  // Relationships

  @ManyToOne(() => Category, category => category.cars, {
    eager: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'fk_category_id' })
  category: Category;
}

export { Car };
