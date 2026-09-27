import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { IncidentTypesService } from './incident-types.service.js';
import { CreateIncidentTypeDto } from './dto/create-incident-type.dto.js';
import { UpdateIncidentTypeDto } from './dto/update-incident-type.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Tipos de Incidencias (Incident Types)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('incident-types')
export class IncidentTypesController {
  constructor(private readonly incidentTypesService: IncidentTypesService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los tipos de incidencias (index)' })
  index() {
    return this.incidentTypesService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un tipo de incidencia (store)' })
  store(@Body() createIncidentTypeDto: CreateIncidentTypeDto) {
    return this.incidentTypesService.store(createIncidentTypeDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un tipo de incidencia (update)' })
  update(@Param('id') id: string, @Body() updateIncidentTypeDto: UpdateIncidentTypeDto) {
    return this.incidentTypesService.update(+id, updateIncidentTypeDto);
  }
}
