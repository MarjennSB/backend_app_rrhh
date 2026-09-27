import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { TypeDocumentService } from './type-document.service.js';
import { CreateTypeDocumentDto } from './dto/create-type-document.dto.js';
import { UpdateTypeDocumentDto } from './dto/update-type-document.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Tipo de Documento')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('type-document')
export class TypeDocumentController {
  constructor(private readonly typeDocumentService: TypeDocumentService) {}

  @Get('all')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los tipos de documento (index)' })
  async index() {
      return await this.typeDocumentService.getAllTypeDocuments();
  }

  // Falta implementar store y update en type-document.service.ts
  // Por ahora los dejo listos en el controlador siguiendo tu regla
  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear tipo de documento (store)' })
  store(@Body() createTypeDocumentDto: CreateTypeDocumentDto) {
    // return this.typeDocumentService.store(createTypeDocumentDto);
    return { message: 'store pendiente de implementar en servicio' };
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar tipo de documento (update)' })
  update(@Param('id') id: string, @Body() updateTypeDocumentDto: UpdateTypeDocumentDto) {
    // return this.typeDocumentService.update(+id, updateTypeDocumentDto);
    return { message: 'update pendiente de implementar en servicio' };
  }
}
