import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { PersonalService } from './personal.service.js';
import { CreatePersonalDto } from './dto/create-personal.dto.js';
import { UpdatePersonalDto } from './dto/update-personal.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('personal')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un registro de personal' })
  store(@Body() createPersonalDto: CreatePersonalDto) {
    return this.personalService.store(createPersonalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los registros de personal' })
  index() {
    return this.personalService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un registro de personal' })
  update(@Param('id') id: string, @Body() updatePersonalDto: UpdatePersonalDto) {
    return this.personalService.update(+id, updatePersonalDto);
  }
}
