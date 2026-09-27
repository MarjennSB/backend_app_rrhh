import { Column, Entity, PrimaryColumn, DeleteDateColumn, OneToMany, type Relation } from 'typeorm';
import type { Province } from '../../provinces/entities/province.entity.js';

@Entity('departments')
export class Department {
  @PrimaryColumn({ type: 'varchar', length: 2 })
  id!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  description!: string;

  @Column({ type: 'boolean', default: true })
  status: boolean = true;

  @OneToMany('Province', (province: any) => province.department)
  provinces: Relation<Province[]>;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date = new Date();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
