import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalDocumentsService } from './personal-documents.service.js';
import { PersonalDocumentsController } from './personal-documents.controller.js';
import { PersonalDocument } from './entities/personal-document.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalDocument])],
  controllers: [PersonalDocumentsController],
  providers: [PersonalDocumentsService],
})
export class PersonalDocumentsModule {}
