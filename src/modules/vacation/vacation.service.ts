import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVacationDto } from './dto/create-vacation.dto.js';
import { UpdateVacationDto } from './dto/update-vacation.dto.js';
import { Vacation } from './entities/vacation.entity.js';

@Injectable()
export class VacationService {
  constructor(
    @InjectRepository(Vacation)
    private readonly vacationRepository: Repository<Vacation>,
  ) {}

  async store(createVacationDto: CreateVacationDto) {
    const vacation = this.vacationRepository.create(createVacationDto);
    return this.vacationRepository.save(vacation);
  }

  async index() {
    return this.vacationRepository.find();
  }

  async update(id: number, updateVacationDto: UpdateVacationDto) {
    const vacation = await this.vacationRepository.findOne({ where: { id } });
    if (!vacation) {
      throw new NotFoundException('Vacación no encontrada');
    }
    
    Object.assign(vacation, updateVacationDto);
    return this.vacationRepository.save(vacation);
  }
}
