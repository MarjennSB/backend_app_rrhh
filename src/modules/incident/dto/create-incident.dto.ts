import { IsInt, IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateIncidentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  personal_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  incident_type_id: number;

  @ApiProperty({ example: '2024-05-01' })
  @IsDateString()
  @IsNotEmpty()
  start_date: string;

  @ApiPropertyOptional({ example: '2024-05-05' })
  @IsDateString()
  @IsOptional()
  end_date?: string;

  @ApiPropertyOptional({ example: 'Falta justificada por salud' })
  @IsString()
  @MaxLength(255)
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: '/docs/certificado.pdf' })
  @IsString()
  @MaxLength(500)
  @IsOptional()
  attachment?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
