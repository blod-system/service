import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
  ],
  controllers: [UserController],
  providers: [AppService, UserService, ...databaseProviders, ...userProviders],
})
export class AppModule {}

console.log('host', process.env.DATABASE_HOST);
console.log('password', process.env.DATABASE_PASSWORD);
