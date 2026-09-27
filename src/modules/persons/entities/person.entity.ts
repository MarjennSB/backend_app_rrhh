import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TypeDocument } from '../../type-document/entities/type-document.entity.js';
import { District } from '../../districts/entities/district.entity.js';
import { Gender } from '../../gender/entities/gender.entity.js';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  identity_document_type_id: number;

  @ManyToOne('TypeDocument', { eager: true })
  @JoinColumn({ name: 'identity_document_type_id' })
  identity_document_type: TypeDocument;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  document_number: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  last_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  second_last_name: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @Column({ type: 'varchar', length: 6, nullable: false })
  district_id: string;

  @ManyToOne(() => District, { eager: true })
  @JoinColumn({ name: 'district_id' })
  district: District;

  @Column({ type: 'date', nullable: true })
  birth_date: string;

  @Column({ type: 'int', nullable: false })
  gender_id: number;

  @ManyToOne(() => Gender, { eager: true })
  @JoinColumn({ name: 'gender_id' })
  gender: Gender;

  @Column({ type: 'varchar', length: 500, nullable: true })
  profile_photo_path: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
