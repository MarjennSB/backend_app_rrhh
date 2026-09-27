import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVacationTypeDto } from './dto/create-vacation-type.dto.js';
import { UpdateVacationTypeDto } from './dto/update-vacation-type.dto.js';
import { VacationType } from './entities/vacation-type.entity.js';

@Injectable()
export class VacationTypesService {
  constructor(
    @InjectRepository(VacationType)
    private readonly vacationTypeRepository: Repository<VacationType>
  ) {}

  async index() {
    return this.vacationTypeRepository.find();
  }

  async store(dto: CreateVacationTypeDto) {
    const vacationType = this.vacationTypeRepository.create(dto);
    return this.vacationTypeRepository.save(vacationType);
  }

  async update(id: number, dto: UpdateVacationTypeDto) {
    const vacationType = await this.vacationTypeRepository.findOne({ where: { id } });
    if (!vacationType) {
      throw new NotFoundException(`Tipo de vacación con ID ${id} no encontrado`);
    }

    if (dto.name !== undefined) vacationType.name = dto.name;
    if (dto.status !== undefined) vacationType.status = dto.status;

    return this.vacationTypeRepository.save(vacationType);
  }
}
