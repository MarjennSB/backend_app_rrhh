import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Permission } from './permission.entity.js';
@Entity()

export class Role {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @ManyToMany(() => Permission, { cascade: true })
    @JoinTable()
    permissions: Permission[];
}
