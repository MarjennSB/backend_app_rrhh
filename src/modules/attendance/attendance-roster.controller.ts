import { Controller, Get, Post, Param, Delete, Body, UseGuards } from '@nestjs/common';
import { AttendanceRosterService } from './attendance-roster.service.js';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@Controller('attendance-roster')
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
export class AttendanceRosterController {
  constructor(private readonly attendanceRosterService: AttendanceRosterService) {}

  @Post()
  create(@Body('personal_id') personal_id: number) {
    return this.attendanceRosterService.create(personal_id);
  }

  @Get()
  findAll() {
    return this.attendanceRosterService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceRosterService.remove(+id);
  }
}
