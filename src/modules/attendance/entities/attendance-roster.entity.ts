import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personal } from '../../personal/entities/personal.entity.js';

@Entity('attendance_roster')
export class AttendanceRoster {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false, unique: true })
  personal_id: number;

  @ManyToOne('Personal', { eager: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
