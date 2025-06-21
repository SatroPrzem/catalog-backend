import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log(`\x1b[46m \x1b[35m app is running on PORT: ${process.env.PORT ?? 3000} \x1b[0m`);
}
bootstrap();
