import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

/**
 * Decorador para proteger rutas por roles.
 * Uso: @RequireRoles('ADMIN', 'USER')
 */
export const RequireRoles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
