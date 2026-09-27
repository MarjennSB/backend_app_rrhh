import { IsInt, IsNotEmpty, IsOptional, IsDateString, IsString, MaxLength, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  personal_id: number;

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  attendance_type_id?: number;

  @ApiProperty({ example: '2024-10-15' })
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @ApiPropertyOptional({ example: '08:00:00' })
  @IsString()
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/, { message: 'El formato de hora debe ser HH:mm:ss' })
  entry_time?: string;

  @ApiPropertyOptional({ example: '17:00:00' })
  @IsString()
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/, { message: 'El formato de hora debe ser HH:mm:ss' })
  exit_time?: string;

  @ApiPropertyOptional({ example: 'Llegó tarde por tráfico' })
  @IsString()
  @MaxLength(255)
  @IsOptional()
  observation?: string;
}
