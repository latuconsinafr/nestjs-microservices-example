import { Module } from '@nestjs/common';
import { DbModule } from './config/db.module';
import { UsersModule } from './resources/v1/users/users.module';

@Module({
  imports: [DbModule, UsersModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class AppModule {}
