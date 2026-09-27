import { PartialType } from '@nestjs/swagger';
import { CreateVacationTypeDto } from './create-vacation-type.dto.js';

export class UpdateVacationTypeDto extends PartialType(CreateVacationTypeDto) {}
