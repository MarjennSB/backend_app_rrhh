import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personal } from '../../personal/entities/personal.entity.js';
import { IncidentType } from '../../incident-types/entities/incident-type.entity.js';

@Entity('incident')
export class Incident {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  personal_id: number;

  @ManyToOne('Personal', { eager: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @Column({ type: 'int', nullable: false })
  incident_type_id: number;

  @ManyToOne('IncidentType', { eager: true })
  @JoinColumn({ name: 'incident_type_id' })
  incident_type: IncidentType;

  @Column({ type: 'date', nullable: false })
  start_date: string;

  @Column({ type: 'date', nullable: true })
  end_date: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  attachment: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
