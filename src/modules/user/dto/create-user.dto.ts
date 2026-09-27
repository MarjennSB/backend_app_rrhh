import { IsEmail, IsString, IsOptional, MinLength, MaxLength, IsInt, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  @MaxLength(150)
  first_name: string;

  @ApiPropertyOptional({ example: 'Perez' })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  last_name?: string;

  @ApiPropertyOptional({ example: 'Gomez' })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  second_last_name?: string;

  @ApiPropertyOptional({ example: 'juan@correo.com' })
  @IsEmail({}, { message: 'Debe ser un correo válido' })
  @MaxLength(150)
  @IsOptional()
  email?: string;

  @ApiProperty({ example: 1, description: 'ID del rol asignado' })
  @IsInt()
  role_id: number;

  @ApiProperty({ example: 'juanito123' })
  @IsString()
  @MaxLength(60)
  login: string;

  @ApiProperty({ example: 'miContraseñaSecreta' })
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(255)
  password: string;

  @ApiPropertyOptional({ example: '/images/profile.jpg' })
  @IsString()
  @MaxLength(255)
  @IsOptional()
  profile_photo_path?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
