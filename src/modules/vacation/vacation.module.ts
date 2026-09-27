import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacationService } from './vacation.service.js';
import { VacationController } from './vacation.controller.js';
import { Vacation } from './entities/vacation.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Vacation])],
  controllers: [VacationController],
  providers: [VacationService],
})
export class VacationModule {}
