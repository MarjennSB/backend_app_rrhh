import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrganizationalUnit } from './entities/organizational-unit.entity.js';
import { CreateOrganizationalUnitDto } from './dto/create-organizational-unit.dto.js';
import { UpdateOrganizationalUnitDto } from './dto/update-organizational-unit.dto.js';

@Injectable()
export class OrganizationalUnitsService {
  constructor(
    @InjectRepository(OrganizationalUnit)
    private readonly orgUnitRepository: Repository<OrganizationalUnit>,
  ) {}

  async create(createOrganizationalUnitDto: CreateOrganizationalUnitDto) {
    const orgUnit = this.orgUnitRepository.create(createOrganizationalUnitDto);
    return await this.orgUnitRepository.save(orgUnit);
  }

  async findAll() {
    return await this.orgUnitRepository.find({
      order: { id: 'ASC' }
    });
  }

  async findOne(id: number) {
    const orgUnit = await this.orgUnitRepository.findOne({ where: { id } });
    if (!orgUnit) {
      throw new NotFoundException(`Unidad Organizacional con ID ${id} no encontrada`);
    }
    return orgUnit;
  }

  async update(id: number, updateOrganizationalUnitDto: UpdateOrganizationalUnitDto) {
    const orgUnit = await this.findOne(id);
    Object.assign(orgUnit, updateOrganizationalUnitDto);
    return await this.orgUnitRepository.save(orgUnit);
  }
}
