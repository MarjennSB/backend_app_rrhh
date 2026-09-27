import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';
import { UpdateScheduleDto } from './dto/update-schedule.dto.js';
import { Schedule } from './entities/schedule.entity.js';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>
  ) {}

  async index() {
    return this.scheduleRepository.find({ relations: { organizational_unit: true } });
  }

  async store(dto: CreateScheduleDto) {
    const schedule = this.scheduleRepository.create(dto);
    return this.scheduleRepository.save(schedule);
  }

  async update(id: number, dto: UpdateScheduleDto) {
    const schedule = await this.scheduleRepository.findOne({ where: { id } });
    if (!schedule) {
      throw new NotFoundException(`Horario con ID ${id} no encontrado`);
    }

    if (dto.organizational_unit_id !== undefined) schedule.organizational_unit_id = dto.organizational_unit_id;
    if (dto.name !== undefined) schedule.name = dto.name;
    if (dto.start_time !== undefined) schedule.start_time = dto.start_time;
    if (dto.end_time !== undefined) schedule.end_time = dto.end_time;
    if (dto.tolerance_minutes !== undefined) schedule.tolerance_minutes = dto.tolerance_minutes;
    if (dto.status !== undefined) schedule.status = dto.status;

    return this.scheduleRepository.save(schedule);
  }
}
