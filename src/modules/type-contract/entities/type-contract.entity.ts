import { Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity('contract_type')
export class TypeContract {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 80, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Column({ type: 'boolean', default: true })
  status: boolean = true;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date = new Date();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
