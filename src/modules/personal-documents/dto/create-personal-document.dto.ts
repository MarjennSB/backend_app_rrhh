import { IsInt, IsNotEmpty, IsOptional, IsBoolean, IsDateString, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePersonalDocumentDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  personal_id: number;

  @ApiProperty({ example: 1 })
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
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
