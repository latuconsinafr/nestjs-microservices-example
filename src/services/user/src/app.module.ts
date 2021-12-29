import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { DbModule } from './db.module';
import { UsersService } from './services/users.service';

@Module({
  imports: [DbModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [],
})
export class AppModule {}
