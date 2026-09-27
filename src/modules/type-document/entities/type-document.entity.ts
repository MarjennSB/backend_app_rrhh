import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('type_document')
export class TypeDocument {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ type: 'varchar', length: 20, unique: true })
    acronym!: string;

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'boolean', default: true })
    is_active: boolean = true;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date = new Date();

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date = new Date();
}