import { PartialType } from '@nestjs/swagger';
import { CreateVacationDto } from './create-vacation.dto.js';

export class UpdateVacationDto extends PartialType(CreateVacationDto) {}
