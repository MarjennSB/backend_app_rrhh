import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { DepartmentsService } from './departments.service.js';
import { CreateDepartmentDto } from './dto/create-department.dto.js';
import { UpdateDepartmentDto } from './dto/update-department.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Departamentos (Departments)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los departamentos (index)' })
  index() {
    return this.departmentsService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un departamento (store)' })
  store(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.store(createDepartmentDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un departamento (update)' })
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(id, updateDepartmentDto);
  }
}
