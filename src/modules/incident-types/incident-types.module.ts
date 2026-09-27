import { Module } from '@nestjs/common';
import { IncidentTypesService } from './incident-types.service.js';
import { IncidentTypesController } from './incident-types.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentType } from './entities/incident-type.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([IncidentType])],
  controllers: [IncidentTypesController],
  providers: [IncidentTypesService],
  exports: [IncidentTypesService]
})
export class IncidentTypesModule {}
