import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const root: DynamicModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '',
  database: 'service-user',
  autoLoadEntities: true,
  synchronize: true,
});
const features: DynamicModule = TypeOrmModule.forFeature([User]);

@Module({
  imports: [root, features],
  exports: [features],
})
export class DbModule {}
