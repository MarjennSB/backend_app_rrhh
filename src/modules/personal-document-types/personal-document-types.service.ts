import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonalDocumentTypeDto } from './dto/create-personal-document-type.dto.js';
import { UpdatePersonalDocumentTypeDto } from './dto/update-personal-document-type.dto.js';
import { PersonalDocumentType } from './entities/personal-document-type.entity.js';

@Injectable()
export class PersonalDocumentTypesService {
  constructor(
    @InjectRepository(PersonalDocumentType)
    private readonly personalDocumentTypeRepository: Repository<PersonalDocumentType>
  ) {}

  async index() {
    return this.personalDocumentTypeRepository.find();
  }

  async store(dto: CreatePersonalDocumentTypeDto) {
    const personalDocumentType = this.personalDocumentTypeRepository.create(dto);
    return this.personalDocumentTypeRepository.save(personalDocumentType);
  }

  async update(id: number, dto: UpdatePersonalDocumentTypeDto) {
    const personalDocumentType = await this.personalDocumentTypeRepository.findOne({ where: { id } });
    if (!personalDocumentType) {
      throw new NotFoundException(`Tipo de documento personal con ID ${id} no encontrado`);
    }

    if (dto.name !== undefined) personalDocumentType.name = dto.name;
    if (dto.status !== undefined) personalDocumentType.status = dto.status;

    return this.personalDocumentTypeRepository.save(personalDocumentType);
  }
}
