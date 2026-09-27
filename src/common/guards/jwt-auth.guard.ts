import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Esta guardia verifica que el usuario haya enviado un Token JWT válido
 * en la cabecera de la petición (Authorization: Bearer <token>).
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Aquí podrías agregar lógica extra antes de validar el token si quisieras
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // Si hay un error o no se detectó un usuario válido, lanzamos excepción
    if (err || !user) {
      throw err || new UnauthorizedException('Acceso denegado. Token inválido o faltante.');
    }
    // Si todo está bien, retornamos el usuario que irá a parar a request.user
    return user;
  }
}
