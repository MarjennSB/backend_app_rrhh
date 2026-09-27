import { Module } from '@nestjs/common';
import { RoleService } from './role.service.js';
import { RoleController } from './role.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity.js';
import { Permission } from './entities/permission.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
