import { IsString, MaxLength, IsOptional, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProvinceDto {
  @ApiProperty({ example: 'Lima' })
  @IsString()
  @MaxLength(100)
  description: string;

  @ApiProperty({ example: '01' })
  @IsString()
  @MaxLength(2)
  department_id: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
