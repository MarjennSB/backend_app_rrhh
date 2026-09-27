import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { ContractService } from './contract.service.js';
import { CreateContractDto } from './dto/create-contract.dto.js';
import { UpdateContractDto } from './dto/update-contract.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('contract')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un contrato' })
  store(@Body() createContractDto: CreateContractDto) {
    return this.contractService.store(createContractDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los contratos' })
  index() {
    return this.contractService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un contrato' })
  update(@Param('id') id: string, @Body() updateContractDto: UpdateContractDto) {
    return this.contractService.update(+id, updateContractDto);
  }
}
