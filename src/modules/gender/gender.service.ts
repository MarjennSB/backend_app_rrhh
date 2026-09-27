import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenderDto } from './dto/create-gender.dto.js';
import { UpdateGenderDto } from './dto/update-gender.dto.js';
import { Gender } from './entities/gender.entity.js';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>
  ) {}

  async index() {
    return this.genderRepository.find();
  }

  async store(dto: CreateGenderDto) {
    const gender = this.genderRepository.create(dto);
    return this.genderRepository.save(gender);
  }

  async update(id: number, dto: UpdateGenderDto) {
    const gender = await this.genderRepository.findOne({ where: { id } });
    if (!gender) {
      throw new NotFoundException(`Género con ID ${id} no encontrado`);
    }

    if (dto.name !== undefined) gender.name = dto.name;
    if (dto.acronym !== undefined) gender.acronym = dto.acronym;
    if (dto.status !== undefined) gender.status = dto.status;

    return this.genderRepository.save(gender);
  }
}
