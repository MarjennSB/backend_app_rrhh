import { IsString, MaxLength, IsOptional, IsBoolean, IsInt, IsNotEmpty } from 'class-validator';
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

  @ApiProperty({ example: 1, description: 'ID de la Unidad Orgánica a la que pertenece este cargo' })
  @IsInt()
  @IsNotEmpty()
  organizational_unit_id: number;
}
