import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { AttendanceService } from './attendance.service.js';
import { CreateAttendanceDto } from './dto/create-attendance.dto.js';
import { UpdateAttendanceDto } from './dto/update-attendance.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('attendance')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un registro de asistencia' })
  store(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.store(createAttendanceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los registros de asistencia' })
  index() {
    return this.attendanceService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un registro de asistencia' })
  update(@Param('id') id: string, @Body() updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendanceService.update(+id, updateAttendanceDto);
  }
}
