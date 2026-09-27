import { PartialType } from '@nestjs/swagger';
import { CreateTypeAttendanceDto } from './create-type-attendance.dto.js';

export class UpdateTypeAttendanceDto extends PartialType(CreateTypeAttendanceDto) {}
