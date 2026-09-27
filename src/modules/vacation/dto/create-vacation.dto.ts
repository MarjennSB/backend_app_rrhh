import { IsInt, IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVacationDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  personal_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  vacation_type_id: number;

  @ApiProperty({ example: '2024-01-01' })
  @IsDateString()
  @IsNotEmpty()
  start_date: string;

  @ApiProperty({ example: '2024-01-15' })
  @IsDateString()
  @IsNotEmpty()
  end_date: string;

  @ApiProperty({ example: 15 })
  @IsInt()
  @IsNotEmpty()
  days_quantity: number;

  @ApiPropertyOptional({ example: 'Vacaciones de verano' })
  @IsString()
  @MaxLength(255)
  @IsOptional()
  observation?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
