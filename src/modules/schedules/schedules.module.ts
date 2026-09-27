import { Module } from '@nestjs/common';
import { SchedulesService } from './schedules.service.js';
import { SchedulesController } from './schedules.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  controllers: [SchedulesController],
  providers: [SchedulesService],
  exports: [SchedulesService]
})
export class SchedulesModule {}
