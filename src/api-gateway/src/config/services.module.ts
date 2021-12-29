import { Module } from '@nestjs/common';
import {
  ClientsModule,
  ClientsModuleOptions,
  Transport,
} from '@nestjs/microservices';

const services: ClientsModuleOptions = [
  {
    name: 'USERS_SERVICE',
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4001,
    },
  },
];

@Module({
  imports: [ClientsModule.register(services)],
  exports: [ClientsModule.register(services)],
})
export class ServicesModule {}
