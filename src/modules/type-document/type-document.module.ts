import { Module } from '@nestjs/common';
import { TypeDocumentService } from './type-document.service.js';
import { TypeDocumentController } from './type-document.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeDocument } from './entities/type-document.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([TypeDocument])],
  controllers: [TypeDocumentController],
  providers: [TypeDocumentService],
  exports: [TypeOrmModule]
})
export class TypeDocumentModule {}
