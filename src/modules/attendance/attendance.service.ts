import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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
    // Validar que no exista ya un registro de asistencia para este empleado en esta fecha
    const existing = await this.attendanceRepository.findOne({
      where: { 
        personal_id: createAttendanceDto.personal_id,
        date: createAttendanceDto.date
      }
    });

    if (existing) {
      throw new BadRequestException('El empleado ya tiene un registro de asistencia para esta fecha. Si desea modificarlo, actualice el registro existente.');
    }

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
