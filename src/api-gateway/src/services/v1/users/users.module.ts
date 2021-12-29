import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../config/services.module';
import UsersController from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [ServicesModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [],
})
export class UsersModule {}
