import { Column, Entity, PrimaryColumn, DeleteDateColumn, ManyToOne, JoinColumn, OneToMany, type Relation } from 'typeorm';
import type { Department } from '../../departments/entities/department.entity.js';
import type { District } from '../../districts/entities/district.entity.js';

@Entity('provinces')
export class Province {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  id!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  description!: string;

  @Column({ name: 'department_id', type: 'varchar', length: 2, nullable: false })
  department_id!: string;

  @ManyToOne('Department', (department: any) => department.provinces)
  @JoinColumn({ name: 'department_id' })
  department: Relation<Department>;

  @OneToMany('District', (district: any) => district.province)
  districts: Relation<District[]>;

  @Column({ type: 'boolean', default: true })
  status: boolean = true;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date = new Date();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
