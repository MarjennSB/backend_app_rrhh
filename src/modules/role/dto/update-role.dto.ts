import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto.js';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    name?: string;
    permissions?: string[];
}
