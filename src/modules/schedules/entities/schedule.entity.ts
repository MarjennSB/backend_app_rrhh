import { Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { OrganizationalUnit } from '../../organizational-units/entities/organizational-unit.entity.js';

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ name: 'organizational_unit_id', type: 'int', nullable: false })
  organizational_unit_id!: number;

  @ManyToOne('OrganizationalUnit')
  @JoinColumn({ name: 'organizational_unit_id' })
  organizational_unit: OrganizationalUnit;

  @Column({ type: 'varchar', length: 80, nullable: false })
  name!: string;

  @Column({ type: 'time', nullable: false })
  start_time!: string;

  @Column({ type: 'time', nullable: false })
  end_time!: string;

  @Column({ type: 'smallint', default: 0 })
  tolerance_minutes: number = 0;

  @Column({ type: 'boolean', default: true })
  workday_monday: boolean = true;

  @Column({ type: 'boolean', default: true })
  workday_tuesday: boolean = true;

  @Column({ type: 'boolean', default: true })
  workday_wednesday: boolean = true;

  @Column({ type: 'boolean', default: true })
  workday_thursday: boolean = true;

  @Column({ type: 'boolean', default: true })
  workday_friday: boolean = true;

  @Column({ type: 'boolean', default: false })
  workday_saturday: boolean = false;

  @Column({ type: 'boolean', default: false })
  workday_sunday: boolean = false;

  @Column({ type: 'boolean', default: true })
  status: boolean = true;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date = new Date();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
