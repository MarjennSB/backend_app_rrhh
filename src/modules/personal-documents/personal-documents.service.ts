import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import * as fs from 'fs';
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
    const existing = await this.personalDocumentRepository.findOne({
      where: {
        personal_id: createPersonalDocumentDto.personal_id,
        personal_document_type_id: createPersonalDocumentDto.personal_document_type_id,
      },
    });

    if (existing) {
      throw new ConflictException('Este tipo de documento ya está registrado para esta persona.');
    }

    const document = this.personalDocumentRepository.create(createPersonalDocumentDto);
    return this.personalDocumentRepository.save(document);
  }

  async index() {
    return this.personalDocumentRepository.find({
      relations: {
        personal: {
          person: true
        },
        personal_document_type: true
      }
    });
  }

  async update(id: number, updatePersonalDocumentDto: UpdatePersonalDocumentDto) {
    const document = await this.personalDocumentRepository.findOne({ where: { id } });
    if (!document) {
      throw new NotFoundException('Documento personal no encontrado');
    }
    
    const targetPersonalId = updatePersonalDocumentDto.personal_id ?? document.personal_id;
    const targetTypeId = updatePersonalDocumentDto.personal_document_type_id ?? document.personal_document_type_id;

    if (targetPersonalId !== document.personal_id || targetTypeId !== document.personal_document_type_id) {
      const existing = await this.personalDocumentRepository.findOne({
        where: {
          personal_id: targetPersonalId,
          personal_document_type_id: targetTypeId,
        },
      });

      if (existing && existing.id !== id) {
        throw new ConflictException('Este tipo de documento ya está registrado para esta persona.');
      }
    }

    const oldFilePath = document.file_path;

    Object.assign(document, updatePersonalDocumentDto);
    
    // TypeORM fix: When eager loading is true, we must delete the relation object
    // so it uses the updated foreign key ID column without trying to set it to null.
    if (updatePersonalDocumentDto.personal_document_type_id) {
      delete (document as any).personal_document_type;
    }
    if (updatePersonalDocumentDto.personal_id) {
      delete (document as any).personal;
    }

    const savedDocument = await this.personalDocumentRepository.save(document);

    // Si se subió un nuevo archivo y existía uno anterior, lo eliminamos físicamente
    if (updatePersonalDocumentDto.file_path && oldFilePath && oldFilePath !== updatePersonalDocumentDto.file_path) {
      try {
        const fullPath = `.${oldFilePath}`; // e.g. ./uploads/documents/file.pdf
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      } catch (err) {
        console.error('Error al intentar eliminar el archivo anterior:', err);
      }
    }

    return savedDocument;
  }
}
