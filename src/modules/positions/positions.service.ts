import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionDto } from './dto/create-position.dto.js';
import { UpdatePositionDto } from './dto/update-position.dto.js';
import { Position } from './entities/position.entity.js';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>
  ) {}

  async index() {
    return this.positionRepository.find({
      relations: {
        organizational_unit: true
      }
    });
  }

  async findByUnit(unitId: number) {
    return this.positionRepository.find({
      where: { organizational_unit_id: unitId },
      relations: {
        organizational_unit: true
      }
    });
  }

  async store(dto: CreatePositionDto) {
    const position = this.positionRepository.create(dto);
    return this.positionRepository.save(position);
  }

  async update(id: number, dto: UpdatePositionDto) {
    const position = await this.positionRepository.findOne({ 
      where: { id },
      relations: { organizational_unit: true }
    });
    if (!position) {
      throw new NotFoundException(`Cargo con ID ${id} no encontrado`);
    }

    if (dto.name !== undefined) position.name = dto.name;
    if (dto.status !== undefined) position.status = dto.status;
    if (dto.organizational_unit_id !== undefined) position.organizational_unit_id = dto.organizational_unit_id;

    return this.positionRepository.save(position);
  }
}
