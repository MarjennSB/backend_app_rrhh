import { IsString, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsString({ message: 'El login es obligatorio' })
  login: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
