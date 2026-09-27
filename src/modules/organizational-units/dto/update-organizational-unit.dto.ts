import { PartialType } from '@nestjs/swagger';
import { CreateOrganizationalUnitDto } from './create-organizational-unit.dto.js';

export class UpdateOrganizationalUnitDto extends PartialType(CreateOrganizationalUnitDto) {}
