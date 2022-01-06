import { Module } from '@nestjs/common';
import {
  ClientsModule,
  ClientsModuleOptions,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path/posix';

const services: ClientsModuleOptions = [
  {
    name: 'USERS_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'users',
      protoPath: join(__dirname, '../services/v1/users/protos/users.proto'),
      url: 'localhost:5001',
    },
  },
];

@Module({
  imports: [ClientsModule.register(services)],
  exports: [ClientsModule.register(services)],
})
export class ServicesModule {}
