import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personal } from '../../personal/entities/personal.entity.js';
import { TypeContract } from '../../type-contract/entities/type-contract.entity.js';

@Entity('contract')
export class Contract {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  personal_id: number;

  @ManyToOne(() => Personal, { eager: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @Column({ type: 'int', nullable: false })
  contract_type_id: number;

  @ManyToOne(() => TypeContract, { eager: true })
  @JoinColumn({ name: 'contract_type_id' })
  contract_type: TypeContract;

  @Column({ type: 'date', nullable: false })
  start_date: string;

  @Column({ type: 'date', nullable: true })
  end_date: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  salary: number;

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
