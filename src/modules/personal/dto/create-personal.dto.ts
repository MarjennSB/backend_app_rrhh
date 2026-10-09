import { IsInt, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePersonalDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  person_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  position_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  organizational_unit_id: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  schedule_id: number;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
