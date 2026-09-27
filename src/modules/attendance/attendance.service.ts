import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttendanceDto } from './dto/create-attendance.dto.js';
import { UpdateAttendanceDto } from './dto/update-attendance.dto.js';
import { Attendance } from './entities/attendance.entity.js';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,
  ) {}

  async store(createAttendanceDto: CreateAttendanceDto) {
    const attendance = this.attendanceRepository.create(createAttendanceDto);
    return this.attendanceRepository.save(attendance);
  }

  async index() {
    return this.attendanceRepository.find();
  }

  async update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    const attendance = await this.attendanceRepository.findOne({ where: { id } });
    if (!attendance) {
      throw new NotFoundException('Registro de asistencia no encontrado');
    }
    
    Object.assign(attendance, updateAttendanceDto);
    return this.attendanceRepository.save(attendance);
  }
}
