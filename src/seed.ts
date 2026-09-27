import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DataSource } from 'typeorm';

import { seedRoles } from './modules/seeds/role.seed.js';
import { seedGenders } from './modules/seeds/gender.seed.js';
import { seedTypeDocuments } from './modules/seeds/type-document.seed.js';
import { seedDepartments } from './modules/seeds/department.seed.js';
import { seedProvinces } from './modules/seeds/province.seed.js';
import { seedDistricts } from './modules/seeds/district.seed.js';
import { seedIncidentTypes } from './modules/seeds/incident-type.seed.js';
import { seedOrganizationalUnits } from './modules/seeds/organizational-unit.seed.js';
import { seedPersonalDocumentTypes } from './modules/seeds/personal-document-type.seed.js';
import { seedPositions } from './modules/seeds/position.seed.js';
import { seedSchedules } from './modules/seeds/schedule.seed.js';
import { seedTypeAttendances } from './modules/seeds/type-attendance.seed.js';
import { seedTypeContracts } from './modules/seeds/type-contract.seed.js';
import { seedUsers } from './modules/seeds/user.seed.js';
import { seedVacationTypes } from './modules/seeds/vacation-type.seed.js';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  console.log('--- INICIANDO CARGA DE SEMILLAS (SEEDS) ---');
  
  await seedRoles(dataSource);
  await seedUsers(dataSource);
  await seedGenders(dataSource);
  await seedTypeDocuments(dataSource);
  await seedIncidentTypes(dataSource);
  await seedOrganizationalUnits(dataSource);
  await seedPersonalDocumentTypes(dataSource);
  await seedPositions(dataSource);
  await seedSchedules(dataSource);
  await seedTypeAttendances(dataSource);
  await seedTypeContracts(dataSource);
  await seedVacationTypes(dataSource);

  console.log('Cargando UBIGEOS (Departamentos, Provincias, Distritos)...');
  await seedDepartments(dataSource);
  await seedProvinces(dataSource);
  await seedDistricts(dataSource);
  
  console.log('--- SEMILLAS EJECUTADAS CORRECTAMENTE ---');
  await app.close();
}
bootstrap();
