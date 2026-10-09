import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // De dónde se extrae el token (Authorization: Bearer <token>)
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Falla si el token ya expiró
      secretOrKey: process.env.JWT_SECRET || 'MI_SUPER_SECRETO_RRHH', // Lee desde el .env
    });
  }

  // Si el token es válido, Passport ejecuta esto y lo guarda en request.user
  async validate(payload: any) {
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      permissions: payload.permissions
    };
  }
}
