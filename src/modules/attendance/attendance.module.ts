import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceService } from './attendance.service.js';
import { AttendanceController } from './attendance.controller.js';
import { Attendance } from './entities/attendance.entity.js';
import { AttendanceRoster } from './entities/attendance-roster.entity.js';
import { AttendanceRosterService } from './attendance-roster.service.js';
import { AttendanceRosterController } from './attendance-roster.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance, AttendanceRoster])],
  controllers: [AttendanceController, AttendanceRosterController],
  providers: [AttendanceService, AttendanceRosterService],
})
export class AttendanceModule {}
