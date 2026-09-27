import { Module } from '@nestjs/common';
import { DistrictsService } from './districts.service.js';
import { DistrictsController } from './districts.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { District } from './entities/district.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([District])],
  controllers: [DistrictsController],
  providers: [DistrictsService],
  exports: [DistrictsService]
})
export class DistrictsModule {}
