import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { GenderService } from './gender.service.js';
import { CreateGenderDto } from './dto/create-gender.dto.js';
import { UpdateGenderDto } from './dto/update-gender.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Géneros (Gender)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los géneros (index)' })
  index() {
    return this.genderService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un género (store)' })
  store(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.store(createGenderDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un género (update)' })
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(+id, updateGenderDto);
  }
}
