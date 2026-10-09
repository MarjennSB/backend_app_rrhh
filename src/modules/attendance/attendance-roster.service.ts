import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceRoster } from './entities/attendance-roster.entity.js';

@Injectable()
export class AttendanceRosterService {
  constructor(
    @InjectRepository(AttendanceRoster)
    private readonly rosterRepository: Repository<AttendanceRoster>,
  ) {}

  async findAll(): Promise<AttendanceRoster[]> {
    return this.rosterRepository.find({
      order: { id: 'DESC' },
    });
  }

  async create(personal_id: number): Promise<AttendanceRoster> {
    const existing = await this.rosterRepository.findOne({ where: { personal_id } });
    if (existing) {
      throw new ConflictException('El personal ya está agregado al control de asistencia');
    }
    const newRoster = this.rosterRepository.create({ personal_id });
    return this.rosterRepository.save(newRoster);
  }

  async remove(id: number): Promise<void> {
    const roster = await this.rosterRepository.findOne({ where: { id } });
    if (!roster) {
      throw new NotFoundException(`Registro con ID ${id} no encontrado`);
    }
    await this.rosterRepository.remove(roster);
  }
}
