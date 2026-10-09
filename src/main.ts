import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { CustomValidationPipe } from './common/pipes/validation.pipe.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // Activamos nuestro Pipe de validación de forma global
  app.useGlobalPipes(new CustomValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API RRHH')
    .setDescription('API para el sistema de Recursos Humanos')
    .setVersion('1.0')
    // Le decimos a Swagger que usaremos tokens Bearer
    .addBearerAuth() 
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
