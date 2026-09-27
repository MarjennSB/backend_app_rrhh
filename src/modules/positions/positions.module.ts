import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service.js';
import { PositionsController } from './positions.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './entities/position.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Position])],
  controllers: [PositionsController],
  providers: [PositionsService],
  exports: [PositionsService]
})
export class PositionsModule {}
