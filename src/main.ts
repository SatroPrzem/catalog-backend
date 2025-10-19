import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
  console.log(`\x1b[46m \x1b[35m app is running on PORT: ${process.env.PORT ?? 3000} \x1b[0m`);
}
bootstrap().catch((err) => {
  console.error('\x1b[31m App failed to start:\x1b[0m', err);
});
