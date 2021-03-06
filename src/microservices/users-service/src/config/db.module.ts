import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const root: DynamicModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '',
  database: 'users-service',
  autoLoadEntities: true,
  synchronize: true,
});

@Module({
  imports: [root],
})
export class DbModule {}
