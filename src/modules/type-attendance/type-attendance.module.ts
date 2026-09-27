import { Module } from '@nestjs/common';
import { TypeAttendanceService } from './type-attendance.service.js';
import { TypeAttendanceController } from './type-attendance.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeAttendance } from './entities/type-attendance.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([TypeAttendance])],
  controllers: [TypeAttendanceController],
  providers: [TypeAttendanceService],
  exports: [TypeAttendanceService]
})
export class TypeAttendanceModule {}
