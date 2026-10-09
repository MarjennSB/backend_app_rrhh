import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personal } from '../../personal/entities/personal.entity.js';
import { TypeAttendance } from '../../type-attendance/entities/type-attendance.entity.js';

@Entity('attendance')
export class Attendance {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  personal_id: number;

  @ManyToOne('Personal', { eager: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @Column({ type: 'int', nullable: true })
  attendance_type_id: number;

  @ManyToOne('TypeAttendance', { eager: true })
  @JoinColumn({ name: 'attendance_type_id' })
  attendance_type: TypeAttendance;

  @Column({ type: 'date', nullable: false })
  date: string;

  @Column({ type: 'time', nullable: true })
  entry_time: string;

  @Column({ type: 'time', nullable: true })
  exit_time: string;

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
