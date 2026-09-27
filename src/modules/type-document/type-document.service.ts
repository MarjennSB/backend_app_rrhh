import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeDocumentDto } from './dto/create-type-document.dto.js';
import { UpdateTypeDocumentDto } from './dto/update-type-document.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeDocument } from './entities/type-document.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class TypeDocumentService {
  constructor(
    @InjectRepository(TypeDocument)
    private readonly typeDocumentRepository: Repository<TypeDocument>
  ) { }

  async getAllTypeDocuments() {
    return await this.typeDocumentRepository.find({
      order: { id: 'ASC' }
        });
    }

    async getTypeDocumentById(id: number) {
        const typeDocument = await this.typeDocumentRepository.findOne({ where: { id } });
        if (!typeDocument) {
            throw new NotFoundException(`Tipo de documento con ID ${id} no encontrado`);
        }
        return typeDocument;
    }
}
