import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión y obtener JWT' })
  login(@Body() dto: LoginAuthDto) {
    return this.authService.login(dto);
  }
}
