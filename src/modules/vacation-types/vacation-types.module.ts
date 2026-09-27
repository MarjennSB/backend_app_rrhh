import { Module } from '@nestjs/common';
import { VacationTypesService } from './vacation-types.service.js';
import { VacationTypesController } from './vacation-types.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacationType } from './entities/vacation-type.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([VacationType])],
  controllers: [VacationTypesController],
  providers: [VacationTypesService],
  exports: [VacationTypesService]
})
export class VacationTypesModule {}
