import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { PositionsService } from './positions.service.js';
import { CreatePositionDto } from './dto/create-position.dto.js';
import { UpdatePositionDto } from './dto/update-position.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Cargos (Positions)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los cargos (index)' })
  index() {
    return this.positionsService.index();
  }

  @Get('by-unit/:unitId')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar cargos filtrados por unidad orgánica' })
  findByUnit(@Param('unitId') unitId: string) {
    return this.positionsService.findByUnit(+unitId);
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un cargo (store)' })
  store(@Body() createPositionDto: CreatePositionDto) {
    return this.positionsService.store(createPositionDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un cargo (update)' })
  update(@Param('id') id: string, @Body() updatePositionDto: UpdatePositionDto) {
    return this.positionsService.update(+id, updatePositionDto);
  }
}
