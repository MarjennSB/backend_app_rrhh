import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';
import { Role } from './entities/role.entity.js';
import { Permission } from './entities/permission.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

@Injectable()
export class RoleService {

  constructor(
    @InjectRepository(Role)
    private roleRepo: Repository<Role>,

    @InjectRepository(Permission)
    private permRepo: Repository<Permission>,
  ) {}

  async create(dto: CreateRoleDto) {
    // Si no envían permisos, asignamos un array vacío
    const permissionsList = dto.permissions || [];
    
    const permissions = await this.permRepo.find({
      where: { name: In(permissionsList) },
    });

    const role = this.roleRepo.create({
      name: dto.name,
      permissions,
    });

    return this.roleRepo.save(role);
  }

  findAll() {
    return this.roleRepo.find({ relations: { permissions: true } });
  }

  async findOne(id: number) {
    const role = await this.roleRepo.findOne({
      where: { id },
      relations: { permissions: true },
    });

    if (!role) {
      throw new NotFoundException(`Role con ID ${id} no encontrado`);
    }

    return role;
  }

  async update(id: number, dto: UpdateRoleDto) {
    const role = await this.roleRepo.findOne({ where: { id } });

    if (!role) {
      throw new NotFoundException(`Role con ID ${id} no encontrado`);
    }

    if (dto.permissions) {
      const permissions = await this.permRepo.find({
        where: { name: In(dto.permissions) },
      });
      role.permissions = permissions;
    }

    if (dto.name) {
      role.name = dto.name;
    }

    return this.roleRepo.save(role);
  }

  async remove(id: number) {
    const role = await this.findOne(id);
    return this.roleRepo.remove(role);
  }
}
