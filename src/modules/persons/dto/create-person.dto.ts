import { IsInt, IsString, IsNotEmpty, IsOptional, MaxLength, IsEmail, IsBoolean, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  identity_document_type_id: number;

  @ApiProperty({ example: '72345678' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  document_number: string;

  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  first_name: string;

  @ApiPropertyOptional({ example: 'Perez' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  last_name?: string;

  @ApiPropertyOptional({ example: 'Gomez' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  second_last_name?: string;

  @ApiPropertyOptional({ example: 'juan@correo.com' })
  @IsEmail()
  @IsOptional()
  @MaxLength(150)
  email?: string;

  @ApiPropertyOptional({ example: '987654321' })
  @IsString()
  @IsOptional()
  @MaxLength(20)
  phone_number?: string;

  @ApiPropertyOptional({ example: 'Av. Siempre Viva 123' })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  address?: string;

  @ApiProperty({ example: '010101' })
  @IsString()
  @MaxLength(6)
  @IsNotEmpty()
  district_id: string;

  @ApiPropertyOptional({ example: '1990-01-01' })
  @IsDateString()
  @IsOptional()
  birth_date?: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  gender_id: number;

  @ApiPropertyOptional({ example: '/images/photo.jpg' })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  profile_photo_path?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
