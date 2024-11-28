import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      /* forbidNonWhitelisted: true, BOQUEIA CASO HAJA DADOS A MAIS */
      transform: true /* ELE JA TRANSFORMA O TIPO DO DADO */,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
