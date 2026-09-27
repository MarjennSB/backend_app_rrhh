import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncidentDto } from './dto/create-incident.dto.js';
import { UpdateIncidentDto } from './dto/update-incident.dto.js';
import { Incident } from './entities/incident.entity.js';

@Injectable()
export class IncidentService {
  constructor(
    @InjectRepository(Incident)
    private readonly incidentRepository: Repository<Incident>,
  ) {}

  async store(createIncidentDto: CreateIncidentDto) {
    const incident = this.incidentRepository.create(createIncidentDto);
    return this.incidentRepository.save(incident);
  }

  async index() {
    return this.incidentRepository.find();
  }

  async update(id: number, updateIncidentDto: UpdateIncidentDto) {
    const incident = await this.incidentRepository.findOne({ where: { id } });
    if (!incident) {
      throw new NotFoundException('Incidencia no encontrada');
    }
    
    Object.assign(incident, updateIncidentDto);
    return this.incidentRepository.save(incident);
  }
}
