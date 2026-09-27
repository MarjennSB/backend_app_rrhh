import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto.js';
import { UpdateDepartmentDto } from './dto/update-department.dto.js';
import { Department } from './entities/department.entity.js';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>
  ) {}

  async index() {
    return this.departmentRepository.find();
  }

  async store(dto: CreateDepartmentDto) {
    const department = this.departmentRepository.create(dto);
    return this.departmentRepository.save(department);
  }

  async update(id: string, dto: UpdateDepartmentDto) {
    const department = await this.departmentRepository.findOne({ where: { id } });
    if (!department) {
      throw new NotFoundException(`Departamento con ID ${id} no encontrado`);
    }

    if (dto.description !== undefined) department.description = dto.description;
    if (dto.status !== undefined) department.status = dto.status;

    return this.departmentRepository.save(department);
  }
}
