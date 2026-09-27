import { IsString, MaxLength, IsOptional, IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDistrictDto {
  @ApiProperty({ example: 'Miraflores' })
  @IsString()
  @MaxLength(100)
  description: string;

  @ApiProperty({ example: '0101' })
  @IsString()
  @MaxLength(4)
  province_id: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
