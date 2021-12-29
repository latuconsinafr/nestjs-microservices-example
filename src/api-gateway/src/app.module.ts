import { Module } from '@nestjs/common';
import { UsersModule } from './services/v1/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
