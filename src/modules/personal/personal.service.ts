import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonalDto } from './dto/create-personal.dto.js';
import { UpdatePersonalDto } from './dto/update-personal.dto.js';
import { Personal } from './entities/personal.entity.js';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private readonly personalRepository: Repository<Personal>,
  ) {}

  async store(createPersonalDto: CreatePersonalDto) {
    const personal = this.personalRepository.create(createPersonalDto);
    return this.personalRepository.save(personal);
  }

  async index() {
    return this.personalRepository.find();
  }

  async update(id: number, updatePersonalDto: UpdatePersonalDto) {
    const personal = await this.personalRepository.findOne({ where: { id } });
    if (!personal) {
      throw new NotFoundException('Personal no encontrado');
    }
    
    Object.assign(personal, updatePersonalDto);
    return this.personalRepository.save(personal);
  }
}
