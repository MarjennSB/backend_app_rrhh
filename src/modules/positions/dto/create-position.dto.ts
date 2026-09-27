import { IsString, MaxLength, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePositionDto {
  @ApiProperty({ example: 'Gerente' })
  @IsString()
  @MaxLength(80, { message: 'El nombre no puede exceder los 80 caracteres' })
  name: string;

  @ApiPropertyOptional({ example: true, description: 'Estado activo o inactivo' })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
