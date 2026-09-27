import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonalDocumentDto } from './dto/create-personal-document.dto.js';
import { UpdatePersonalDocumentDto } from './dto/update-personal-document.dto.js';
import { PersonalDocument } from './entities/personal-document.entity.js';

@Injectable()
export class PersonalDocumentsService {
  constructor(
    @InjectRepository(PersonalDocument)
    private readonly personalDocumentRepository: Repository<PersonalDocument>,
  ) {}

  async store(createPersonalDocumentDto: CreatePersonalDocumentDto) {
    const document = this.personalDocumentRepository.create(createPersonalDocumentDto);
    return this.personalDocumentRepository.save(document);
  }

  async index() {
    return this.personalDocumentRepository.find();
  }

  async update(id: number, updatePersonalDocumentDto: UpdatePersonalDocumentDto) {
    const document = await this.personalDocumentRepository.findOne({ where: { id } });
    if (!document) {
      throw new NotFoundException('Documento personal no encontrado');
    }
    
    Object.assign(document, updatePersonalDocumentDto);
    return this.personalDocumentRepository.save(document);
  }
}
