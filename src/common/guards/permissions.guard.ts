import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator.js';

/**
 * Verifica si el usuario autenticado posee uno o más permisos específicos
 * (Ej. 'create:user', 'delete:user'). Es más específico que los roles.
 */
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredPermissions) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if (!user || !user.permissions || !Array.isArray(user.permissions)) {
      throw new ForbiddenException('No tienes permisos suficientes (faltan en tu token)');
    }

    // Verificamos si el usuario tiene al menos TODOS los permisos requeridos por la ruta
    // (O si quieres que tenga "al menos uno", cambiarías el .every por .some)
    const hasPermission = requiredPermissions.every(routePermission => 
      user.permissions.includes(routePermission)
    );

    if (!hasPermission) {
      throw new ForbiddenException('No tienes permisos para realizar esta acción');
    }

    return true;
  }
}
