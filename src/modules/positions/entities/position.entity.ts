import { Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { OrganizationalUnit } from '../../organizational-units/entities/organizational-unit.entity.js';

@Entity('positions')
export class Position {
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

  @Column({ type: 'int', nullable: true })
  organizational_unit_id: number;

  @ManyToOne(() => OrganizationalUnit, (unit) => unit.positions)
  @JoinColumn({ name: 'organizational_unit_id' })
  organizational_unit: OrganizationalUnit;

  // Para Soft Delete (borrado lógico)
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
