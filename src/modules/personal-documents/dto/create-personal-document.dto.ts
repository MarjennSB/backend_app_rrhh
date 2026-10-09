import { IsInt, IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreatePersonalDocumentDto {
  @ApiProperty({ example: 1 })
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @IsNotEmpty()
  personal_id: number;

  @ApiProperty({ example: 1 })
  @Transform(({ value }) => parseInt(value, 10))
  @IsInt()
  @IsNotEmpty()
  personal_document_type_id: number;

  @ApiPropertyOptional({ example: 'CV_JuanPerez.pdf' })
  @IsString()
  @MaxLength(255)
  @IsOptional()
  file_name?: string;

  @ApiPropertyOptional({ example: '/uploads/cvs/CV_JuanPerez.pdf' })
  @IsString()
  @MaxLength(500)
  @IsOptional()
  file_path?: string;

  @ApiPropertyOptional({ example: '2023-10-01' })
  @IsDateString()
  @IsOptional()
  document_date?: string;

  @ApiPropertyOptional({ example: true })
  @Transform(({ value }) => value === 'true' || value === true || value === 1 || value === '1')
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
