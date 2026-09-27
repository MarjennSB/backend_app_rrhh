import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'permissions';

/**
 * Decorador para proteger rutas por permisos.
 * Uso: @RequirePermissions('create:user', 'delete:user')
 */
export const RequirePermissions = (...permissions: string[]) => SetMetadata(PERMISSIONS_KEY, permissions);
