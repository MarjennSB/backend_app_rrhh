import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { SchedulesService } from './schedules.service.js';
import { CreateScheduleDto } from './dto/create-schedule.dto.js';
import { UpdateScheduleDto } from './dto/update-schedule.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Horarios (Schedules)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los horarios (index)' })
  index() {
    return this.schedulesService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un horario (store)' })
  store(@Body() createScheduleDto: CreateScheduleDto) {
    return this.schedulesService.store(createScheduleDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un horario (update)' })
  update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.schedulesService.update(+id, updateScheduleDto);
  }
}
