import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { TypeContractService } from './type-contract.service.js';
import { CreateTypeContractDto } from './dto/create-type-contract.dto.js';
import { UpdateTypeContractDto } from './dto/update-type-contract.dto.js';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('Tipos de Contrato (Type Contract)')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('type-contract')
export class TypeContractController {
  constructor(private readonly typeContractService: TypeContractService) {}

  @Get()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Listar todos los tipos de contrato (index)' })
  index() {
    return this.typeContractService.index();
  }

  @Post()
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Crear un tipo de contrato (store)' })
  store(@Body() createTypeContractDto: CreateTypeContractDto) {
    return this.typeContractService.store(createTypeContractDto);
  }

  @Patch(':id')
  @RequireRoles('Administrador')
  @ApiOperation({ summary: 'Actualizar un tipo de contrato (update)' })
  update(@Param('id') id: string, @Body() updateTypeContractDto: UpdateTypeContractDto) {
    return this.typeContractService.update(+id, updateTypeContractDto);
  }
}
