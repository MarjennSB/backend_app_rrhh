import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { UserService } from '../user/user.service.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) { }

  async login(dto: LoginAuthDto) {
    // 1. Buscamos al usuario en la base de datos por su login
    const user = await this.userService.findByLogin(dto.login);
    
    // Si no existe, o si está inactivo, rechazamos
    if (!user || !user.status) {
      throw new UnauthorizedException('Credenciales incorrectas o usuario inactivo');
    }

    // 2. Comparamos la contraseña enviada con el hash guardado en base de datos
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // 3. Extraemos el nombre del rol y permisos
    const roleName = user.role ? user.role.name : 'USER';
    const permissions = user.role && user.role.permissions 
      ? user.role.permissions.map(p => p.name) 
      : [];

    // 4. Preparamos el Payload del JWT
    const payload = {
      sub: user.id, // ID del usuario
      login: user.login,
      role: roleName, 
      permissions: permissions
    };

    // 5. Devolvemos el Token
    return {
      message: `Bienvenido, ${user.first_name} ${user.last_name || ''}`.trim(),
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
