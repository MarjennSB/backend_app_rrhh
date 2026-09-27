import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { VacationService } from './vacation.service.js';
import { CreateVacationDto } from './dto/create-vacation.dto.js';
import { UpdateVacationDto } from './dto/update-vacation.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('vacation')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('vacation')
export class VacationController {
  constructor(private readonly vacationService: VacationService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un registro de vacaciones' })
  store(@Body() createVacationDto: CreateVacationDto) {
    return this.vacationService.store(createVacationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los registros de vacaciones' })
  index() {
    return this.vacationService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un registro de vacaciones' })
  update(@Param('id') id: string, @Body() updateVacationDto: UpdateVacationDto) {
    return this.vacationService.update(+id, updateVacationDto);
  }
}
