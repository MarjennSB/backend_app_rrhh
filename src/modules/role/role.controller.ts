import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service.js';
import { CreateRoleDto } from './dto/create-role.dto.js';
import { UpdateRoleDto } from './dto/update-role.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los roles (index)' })
  index() {
    return this.roleService.findAll(); // En el servicio mantuve findAll, pero aquí se llama index
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un nuevo rol (store)' })
  store(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un rol (update)' })
  update(@Param('id') id: number, @Body() dto: UpdateRoleDto) {
    return this.roleService.update(id, dto);
  }
}
