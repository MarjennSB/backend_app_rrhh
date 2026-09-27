import { Module } from '@nestjs/common';
import { ProvincesService } from './provinces.service.js';
import { ProvincesController } from './provinces.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from './entities/province.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Province])],
  controllers: [ProvincesController],
  providers: [ProvincesService],
  exports: [ProvincesService]
})
export class ProvincesModule {}
