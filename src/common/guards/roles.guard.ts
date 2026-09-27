import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator.js';

/**
 * Verifica si el usuario autenticado tiene el Rol requerido
 * para acceder a una ruta. (Ej. 'ADMIN')
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Si la ruta no exige ningún rol, pasa directamente
    if (!requiredRoles) {
      return true;
    }

    // Extraemos el usuario de la petición (lo puso ahí el JwtAuthGuard antes)
    const { user } = context.switchToHttp().getRequest();

    // Verificamos que exista el usuario y tenga un rol asignado
    if (!user || !user.role) {
      throw new ForbiddenException('No tienes un rol asignado para acceder aquí');
    }

    // Asumiendo que user.role es un string (o un objeto con una propiedad name)
    // Cambia user.role por user.role.name dependiendo de cómo guardes el JWT
    const hasRole = requiredRoles.includes(user.role);

    if (!hasRole) {
      throw new ForbiddenException('Tu rol no tiene acceso a esta acción');
    }

    return true;
  }
}
