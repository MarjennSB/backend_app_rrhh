import { IsString, MaxLength, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGenderDto {
  @ApiProperty({ example: 'Masculino' })
  @IsString()
  @MaxLength(60, { message: 'El nombre no puede exceder los 60 caracteres' })
  name: string;

  @ApiPropertyOptional({ example: 'M' })
  @IsString()
  @MaxLength(5, { message: 'El acrónimo no puede exceder los 5 caracteres' })
  @IsOptional()
  acronym?: string;

  @ApiPropertyOptional({ example: true, description: 'Estado activo o inactivo' })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
