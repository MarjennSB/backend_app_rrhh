import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeAttendanceDto } from './dto/create-type-attendance.dto.js';
import { UpdateTypeAttendanceDto } from './dto/update-type-attendance.dto.js';
import { TypeAttendance } from './entities/type-attendance.entity.js';

@Injectable()
export class TypeAttendanceService {
  constructor(
    @InjectRepository(TypeAttendance)
    private readonly typeAttendanceRepository: Repository<TypeAttendance>
  ) {}

  async index() {
    return this.typeAttendanceRepository.find();
  }

  async store(dto: CreateTypeAttendanceDto) {
    const typeAttendance = this.typeAttendanceRepository.create(dto);
    return this.typeAttendanceRepository.save(typeAttendance);
  }

  async update(id: number, dto: UpdateTypeAttendanceDto) {
    const typeAttendance = await this.typeAttendanceRepository.findOne({ where: { id } });
    if (!typeAttendance) {
      throw new NotFoundException(`Tipo de asistencia con ID ${id} no encontrado`);
    }

    if (dto.name !== undefined) typeAttendance.name = dto.name;
    if (dto.status !== undefined) typeAttendance.status = dto.status;

    return this.typeAttendanceRepository.save(typeAttendance);
  }
}
