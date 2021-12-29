import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersMicroserviceController } from './users-microservice.controller';
import { UsersRestController } from './users-rest.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersRestController, UsersMicroserviceController],
  exports: [],
})
export class UsersModule {}
