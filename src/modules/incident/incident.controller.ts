import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { IncidentService } from './incident.service.js';
import { CreateIncidentDto } from './dto/create-incident.dto.js';
import { UpdateIncidentDto } from './dto/update-incident.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('incident')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('incident')
export class IncidentController {
  constructor(private readonly incidentService: IncidentService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un registro de incidencia' })
  store(@Body() createIncidentDto: CreateIncidentDto) {
    return this.incidentService.store(createIncidentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las incidencias' })
  index() {
    return this.incidentService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un registro de incidencia' })
  update(@Param('id') id: string, @Body() updateIncidentDto: UpdateIncidentDto) {
    return this.incidentService.update(+id, updateIncidentDto);
  }
}
