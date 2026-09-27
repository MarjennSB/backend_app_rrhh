import { Column, Entity, PrimaryColumn, DeleteDateColumn, ManyToOne, JoinColumn, type Relation } from 'typeorm';
import type { Province } from '../../provinces/entities/province.entity.js';

@Entity('districts')
export class District {
  @PrimaryColumn({ type: 'varchar', length: 6 })
  id!: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  description!: string;

  @Column({ name: 'province_id', type: 'varchar', length: 4, nullable: false })
  province_id!: string;

  @ManyToOne('Province', (province: any) => province.districts)
  @JoinColumn({ name: 'province_id' })
  province: Relation<Province>;

  @Column({ type: 'boolean', default: true })
  status: boolean = true;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date = new Date();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
