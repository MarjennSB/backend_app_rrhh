import { IsString, MaxLength, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTypeContractDto {
  @ApiProperty({ example: 'Tiempo Completo' })
  @IsString()
  @MaxLength(80, { message: 'El nombre no puede exceder los 80 caracteres' })
  name: string;

  @ApiPropertyOptional({ example: 'Contrato de 48 horas semanales' })
  @IsString()
  @MaxLength(255, { message: 'La descripción no puede exceder los 255 caracteres' })
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: true, description: 'Estado activo o inactivo' })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
