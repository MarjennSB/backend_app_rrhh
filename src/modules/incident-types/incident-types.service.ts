import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto.js';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto.js';
import { IncidentType } from './entities/incident-type.entity.js';

@Injectable()
export class IncidentTypesService {
  constructor(
    @InjectRepository(IncidentType)
    private readonly incidentTypeRepository: Repository<IncidentType>
  ) {}

  async index() {
    return this.incidentTypeRepository.find();
  }

  async store(dto: CreateIncidentTypeDto) {
    const incidentType = this.incidentTypeRepository.create(dto);
    return this.incidentTypeRepository.save(incidentType);
  }

  async update(id: number, dto: UpdateIncidentTypeDto) {
    const incidentType = await this.incidentTypeRepository.findOne({ where: { id } });
    if (!incidentType) {
      throw new NotFoundException(`Tipo de incidencia con ID ${id} no encontrado`);
    }

    if (dto.name !== undefined) incidentType.name = dto.name;
    if (dto.status !== undefined) incidentType.status = dto.status;

    return this.incidentTypeRepository.save(incidentType);
  }
}
