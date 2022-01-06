import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path/posix';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'users',
      protoPath: join(__dirname, 'resources/v1/users/protos/users.proto'),
      url: 'localhost:5001',
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
