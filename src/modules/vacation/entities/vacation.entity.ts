import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personal } from '../../personal/entities/personal.entity.js';
import { VacationType } from '../../vacation-types/entities/vacation-type.entity.js';

@Entity('vacation')
export class Vacation {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  personal_id: number;

  @ManyToOne('Personal', { eager: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @Column({ type: 'int', nullable: false })
  vacation_type_id: number;

  @ManyToOne('VacationType', { eager: true })
  @JoinColumn({ name: 'vacation_type_id' })
  vacation_type: VacationType;

  @Column({ type: 'date', nullable: false })
  start_date: string;

  @Column({ type: 'date', nullable: false })
  end_date: string;

  @Column({ type: 'smallint', nullable: false })
  days_quantity: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  observation: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
