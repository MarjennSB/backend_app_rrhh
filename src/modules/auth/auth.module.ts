import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from '../user/user.module.js';

@Module({
  imports: [
    UserModule,
    PassportModule,
    // Usamos registerAsync para que lea la variable desde el .env
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '8h' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
