import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { VacationTypesService } from './vacation-types.service.js';
import { CreateVacationTypeDto } from './dto/create-vacation-type.dto.js';
import { UpdateVacationTypeDto } from './dto/update-vacation-type.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Tipos de Vacaciones (Vacation Types)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('vacation-types')
export class VacationTypesController {
  constructor(private readonly vacationTypesService: VacationTypesService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los tipos de vacaciones (index)' })
  index() {
    return this.vacationTypesService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un tipo de vacación (store)' })
  store(@Body() createVacationTypeDto: CreateVacationTypeDto) {
    return this.vacationTypesService.store(createVacationTypeDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un tipo de vacación (update)' })
  update(@Param('id') id: string, @Body() updateVacationTypeDto: UpdateVacationTypeDto) {
    return this.vacationTypesService.update(+id, updateVacationTypeDto);
  }
}
