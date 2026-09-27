import { Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('vacation_types')
export class VacationType {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 80, nullable: false })
  name!: string;

  @Column({ type: 'boolean', default: true })
  status: boolean = true;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date = new Date();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
