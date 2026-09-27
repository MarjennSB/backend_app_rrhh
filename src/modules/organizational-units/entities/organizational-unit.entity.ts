import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
