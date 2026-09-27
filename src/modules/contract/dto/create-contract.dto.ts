import { IsInt, IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateContractDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  personal_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  contract_type_id: number;

  @ApiProperty({ example: '2024-01-01' })
  @IsDateString()
  @IsNotEmpty()
  start_date: string;

  @ApiPropertyOptional({ example: '2024-12-31' })
  @IsDateString()
  @IsOptional()
  end_date?: string;

  @ApiPropertyOptional({ example: 2500.50 })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  salary?: number;

  @ApiPropertyOptional({ example: 'Contrato a plazo fijo' })
  @IsString()
  @MaxLength(255)
  @IsOptional()
  observation?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
