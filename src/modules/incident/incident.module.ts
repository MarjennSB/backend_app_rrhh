import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentService } from './incident.service.js';
import { IncidentController } from './incident.controller.js';
import { Incident } from './entities/incident.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Incident])],
  controllers: [IncidentController],
  providers: [IncidentService],
})
export class IncidentModule {}
