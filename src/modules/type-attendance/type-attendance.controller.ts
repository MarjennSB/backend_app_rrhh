import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { TypeAttendanceService } from './type-attendance.service.js';
import { CreateTypeAttendanceDto } from './dto/create-type-attendance.dto.js';
import { UpdateTypeAttendanceDto } from './dto/update-type-attendance.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Tipos de Asistencia')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('type-attendance')
export class TypeAttendanceController {
  constructor(private readonly typeAttendanceService: TypeAttendanceService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los tipos de asistencia (index)' })
  index() {
    return this.typeAttendanceService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un tipo de asistencia (store)' })
  store(@Body() createTypeAttendanceDto: CreateTypeAttendanceDto) {
    return this.typeAttendanceService.store(createTypeAttendanceDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un tipo de asistencia (update)' })
  update(@Param('id') id: string, @Body() updateTypeAttendanceDto: UpdateTypeAttendanceDto) {
    return this.typeAttendanceService.update(+id, updateTypeAttendanceDto);
  }
}
