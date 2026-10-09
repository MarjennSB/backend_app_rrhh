import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from '../../persons/entities/person.entity.js';
import { Position } from '../../positions/entities/position.entity.js';
import { OrganizationalUnit } from '../../organizational-units/entities/organizational-unit.entity.js';
import { Schedule } from '../../schedules/entities/schedule.entity.js';

@Entity('personal')
export class Personal {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  person_id: number;

  @ManyToOne(() => Person, { eager: true })
  @JoinColumn({ name: 'person_id' })
  person: Person;

  @Column({ type: 'int', nullable: false })
  position_id: number;

  @ManyToOne(() => Position, { eager: true })
  @JoinColumn({ name: 'position_id' })
  position: Position;

  @Column({ type: 'int', nullable: false })
  organizational_unit_id: number;

  @ManyToOne('OrganizationalUnit', { eager: true })
  @JoinColumn({ name: 'organizational_unit_id' })
  organizational_unit: OrganizationalUnit;

  @Column({ type: 'int', nullable: true })
  schedule_id: number;

  @ManyToOne(() => Schedule, { eager: true, nullable: true })
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
