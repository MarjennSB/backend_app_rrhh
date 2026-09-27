import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../../common/guards/roles.guard.js';
import { RequireRoles } from '../../common/decorators/roles.decorator.js';

@ApiTags('user')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@RequireRoles('Administrador')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un usuario' })
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.store(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  index() {
    return this.userService.index();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un usuario' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
}
