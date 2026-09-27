import { Module } from '@nestjs/common';
import { PersonalDocumentTypesService } from './personal-document-types.service.js';
import { PersonalDocumentTypesController } from './personal-document-types.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalDocumentType } from './entities/personal-document-type.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalDocumentType])],
  controllers: [PersonalDocumentTypesController],
  providers: [PersonalDocumentTypesService],
  exports: [PersonalDocumentTypesService]
})
export class PersonalDocumentTypesModule {}
