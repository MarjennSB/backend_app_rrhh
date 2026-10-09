import { IsString, MinLength, IsEmail } from 'class-validator';

export class LoginAuthDto {
  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
