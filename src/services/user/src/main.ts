import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4001,
    },
  });
  app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
