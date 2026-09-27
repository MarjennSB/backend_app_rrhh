import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { PersonalDocumentTypesService } from './personal-document-types.service.js';
import { CreatePersonalDocumentTypeDto } from './dto/create-personal-document-type.dto.js';
import { UpdatePersonalDocumentTypeDto } from './dto/update-personal-document-type.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Tipos de Documento Personal (Personal Document Types)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('personal-document-types')
export class PersonalDocumentTypesController {
  constructor(private readonly personalDocumentTypesService: PersonalDocumentTypesService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los tipos de documento personal (index)' })
  index() {
    return this.personalDocumentTypesService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un tipo de documento personal (store)' })
  store(@Body() createPersonalDocumentTypeDto: CreatePersonalDocumentTypeDto) {
    return this.personalDocumentTypesService.store(createPersonalDocumentTypeDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un tipo de documento personal (update)' })
  update(@Param('id') id: string, @Body() updatePersonalDocumentTypeDto: UpdatePersonalDocumentTypeDto) {
    return this.personalDocumentTypesService.update(+id, updatePersonalDocumentTypeDto);
  }
}
