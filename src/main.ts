import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //*Activamos las validaciones...
  app.useGlobalPipes(
    new ValidationPipe({
      //*Esta opcion lo que va a hacer es quitar de lo que se envie ne el cuerpo de un request todo lo que no cumpla con el formato del DTO
      whitelist: true,
      //*Si enviamos atributos en el body del request que no son validos, va a lanzar un error
      forbidNonWhitelisted: true
    }),
  );
  await app.listen(3200);
}
bootstrap();
