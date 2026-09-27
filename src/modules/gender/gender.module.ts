import { Module } from '@nestjs/common';
import { GenderService } from './gender.service.js';
import { GenderController } from './gender.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gender } from './entities/gender.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
  controllers: [GenderController],
  providers: [GenderService],
  exports: [GenderService]
})
export class GenderModule {}
