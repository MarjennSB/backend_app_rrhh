import { IsString, MaxLength, IsOptional, IsBoolean, IsInt, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty({ example: 1, description: 'ID de la Unidad Organizacional' })
  @IsInt()
  organizational_unit_id: number;

  @ApiProperty({ example: 'Turno Mañana' })
  @IsString()
  @MaxLength(80, { message: 'El nombre no puede exceder los 80 caracteres' })
  name: string;

  @ApiProperty({ example: '08:00:00' })
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, { message: 'El formato debe ser HH:mm:ss' })
  start_time: string;

  @ApiProperty({ example: '17:00:00' })
  @IsString()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, { message: 'El formato debe ser HH:mm:ss' })
  end_time: string;

  @ApiPropertyOptional({ example: 15, description: 'Minutos de tolerancia' })
  @IsInt()
  @IsOptional()
  tolerance_minutes?: number;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  workday_monday?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  workday_tuesday?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  workday_wednesday?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  workday_thursday?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  workday_friday?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsBoolean()
  @IsOptional()
  workday_saturday?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsBoolean()
  @IsOptional()
  workday_sunday?: boolean;

  @ApiPropertyOptional({ example: true, description: 'Estado activo o inactivo' })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
