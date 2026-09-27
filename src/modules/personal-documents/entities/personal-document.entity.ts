import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Personal } from '../../personal/entities/personal.entity.js';
import { PersonalDocumentType } from '../../personal-document-types/entities/personal-document-type.entity.js';

@Entity('personal_documents')
export class PersonalDocument {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int', nullable: false })
  personal_id: number;

  @ManyToOne(() => Personal, { eager: true })
  @JoinColumn({ name: 'personal_id' })
  personal: Personal;

  @Column({ type: 'int', nullable: false })
  personal_document_type_id: number;

  @ManyToOne(() => PersonalDocumentType, { eager: true })
  @JoinColumn({ name: 'personal_document_type_id' })
  personal_document_type: PersonalDocumentType;

  @Column({ type: 'varchar', length: 255, nullable: true })
  file_name: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  file_path: string;

  @Column({ type: 'date', nullable: true })
  document_date: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
