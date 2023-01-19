import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //정의되지 않은 키값 안들어가게 해줌(요청은 됨)
      forbidNonWhitelisted: true, //정의되지 않은 키값 들어가면 요청 안되게 함
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
