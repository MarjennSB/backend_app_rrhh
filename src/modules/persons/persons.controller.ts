import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { PersonsService } from './persons.service.js';
import { CreatePersonDto } from './dto/create-person.dto.js';
import { UpdatePersonDto } from './dto/update-person.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('persons')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una persona' })
  store(@Body() createPersonDto: CreatePersonDto) {
    return this.personsService.store(createPersonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las personas' })
  index() {
    return this.personsService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una persona' })
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personsService.update(+id, updatePersonDto);
  }
}
