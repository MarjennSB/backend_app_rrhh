import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalService } from './personal.service.js';
import { PersonalController } from './personal.controller.js';
import { Personal } from './entities/personal.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Personal])],
  controllers: [PersonalController],
  providers: [PersonalService],
})
export class PersonalModule {}
