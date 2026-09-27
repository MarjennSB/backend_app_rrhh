import { Module } from '@nestjs/common';
import { OrganizationalUnitsService } from './organizational-units.service.js';
import { OrganizationalUnitsController } from './organizational-units.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationalUnit } from './entities/organizational-unit.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationalUnit])],
  controllers: [OrganizationalUnitsController],
  providers: [OrganizationalUnitsService],
  exports: [TypeOrmModule],
})
export class OrganizationalUnitsModule {}
