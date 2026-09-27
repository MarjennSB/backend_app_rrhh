import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { PersonalDocumentsService } from './personal-documents.service.js';
import { CreatePersonalDocumentDto } from './dto/create-personal-document.dto.js';
import { UpdatePersonalDocumentDto } from './dto/update-personal-document.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('personal-documents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('personal-documents')
export class PersonalDocumentsController {
  constructor(private readonly personalDocumentsService: PersonalDocumentsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un registro de documento personal' })
  store(@Body() createPersonalDocumentDto: CreatePersonalDocumentDto) {
    return this.personalDocumentsService.store(createPersonalDocumentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los documentos de personal' })
  index() {
    return this.personalDocumentsService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un documento de personal' })
  update(@Param('id') id: string, @Body() updatePersonalDocumentDto: UpdatePersonalDocumentDto) {
    return this.personalDocumentsService.update(+id, updatePersonalDocumentDto);
  }
}
