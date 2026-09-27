import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { DistrictsService } from './districts.service.js';
import { CreateDistrictDto } from './dto/create-district.dto.js';
import { UpdateDistrictDto } from './dto/update-district.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Distritos (Districts)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los distritos (index)' })
  index() {
    return this.districtsService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un distrito (store)' })
  store(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtsService.store(createDistrictDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un distrito (update)' })
  update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtsService.update(id, updateDistrictDto);
  }
}
