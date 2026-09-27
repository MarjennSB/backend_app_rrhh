import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonsService } from './persons.service.js';
import { PersonsController } from './persons.controller.js';
import { Person } from './entities/person.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
