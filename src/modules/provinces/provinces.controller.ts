import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { ProvincesService } from './provinces.service.js';
import { CreateProvinceDto } from './dto/create-province.dto.js';
import { UpdateProvinceDto } from './dto/update-province.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Provincias (Provinces)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todas las provincias (index)' })
  index() {
    return this.provincesService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear una provincia (store)' })
  store(@Body() createProvinceDto: CreateProvinceDto) {
    return this.provincesService.store(createProvinceDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar una provincia (update)' })
  update(@Param('id') id: string, @Body() updateProvinceDto: UpdateProvinceDto) {
    return this.provincesService.update(id, updateProvinceDto);
  }
}
