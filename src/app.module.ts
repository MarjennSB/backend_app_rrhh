import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { RoleModule } from './modules/role/role.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module.js';
import { TypeDocumentModule } from './modules/type-document/type-document.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module.js';
import { TypeAttendanceModule } from './modules/type-attendance/type-attendance.module.js';
import { PositionsModule } from './modules/positions/positions.module.js';
import { GenderModule } from './modules/gender/gender.module.js';
import { ProvincesModule } from './modules/provinces/provinces.module.js';

import { DepartmentsModule } from './modules/departments/departments.module.js';
import { DistrictsModule } from './modules/districts/districts.module.js';
import { TypeContractModule } from './modules/type-contract/type-contract.module.js';
import { OrganizationalUnitsModule } from './modules/organizational-units/organizational-units.module.js';
import { SchedulesModule } from './modules/schedules/schedules.module.js';
import { VacationTypesModule } from './modules/vacation-types/vacation-types.module.js';
import { IncidentTypesModule } from './modules/incident-types/incident-types.module.js';
import { PersonalDocumentTypesModule } from './modules/personal-document-types/personal-document-types.module.js';
import { PersonsModule } from './modules/persons/persons.module.js';
import { PersonalModule } from './modules/personal/personal.module.js';
import { ContractModule } from './modules/contract/contract.module.js';
import { AttendanceModule } from './modules/attendance/attendance.module.js';
import { VacationModule } from './modules/vacation/vacation.module.js';
import { IncidentModule } from './modules/incident/incident.module.js';
import { PersonalDocumentsModule } from './modules/personal-documents/personal-documents.module.js';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Module({
  imports: [
    // Servir archivos estaticos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    // 1. Cargar el módulo de configuración globalmente (.env)
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    
    // 2. Usar TypeOrmModule de forma asíncrona para que pueda leer las variables de entorno
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: true, // Cambiar a false cuando vayas a producción
      }),
    }),
    AuthModule,
    TypeDocumentModule,
    RoleModule,
    UserModule,
    TypeAttendanceModule,
    PositionsModule,
    GenderModule,
    ProvincesModule,

    DepartmentsModule,
    DistrictsModule,
    TypeContractModule,
    OrganizationalUnitsModule,
    SchedulesModule,
    VacationTypesModule,
    IncidentTypesModule,
    PersonalDocumentTypesModule,
    PersonsModule,
    PersonalModule,
    ContractModule,
    AttendanceModule,
    VacationModule,
    IncidentModule,
    PersonalDocumentsModule, // Lo agrego aquí para que los roles también funcionen
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
