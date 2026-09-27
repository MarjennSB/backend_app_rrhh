import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { Role } from '../../role/entities/role.entity.js';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  first_name!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  last_name?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  second_last_name?: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  email?: string;

  @Column({ type: 'int', nullable: false })
  role_id!: number;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: 'role_id' })
  role!: Role;

  @Column({ type: 'varchar', length: 60, unique: true, nullable: false })
  login!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profile_photo_path?: string;

  @Column({ type: 'boolean', default: true })
  status: boolean = true;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date = new Date();

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date = new Date();

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
