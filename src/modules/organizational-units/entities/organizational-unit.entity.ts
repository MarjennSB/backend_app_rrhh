import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Position } from '../../positions/entities/position.entity.js';

@Entity('organizational_units')
export class OrganizationalUnit {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => Position, (position) => position.organizational_unit)
  positions: Position[];
}
