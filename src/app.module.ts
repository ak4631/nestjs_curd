import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "berry.db.elephantsql.com",
      "port": 5432,
      "username": "gqieavnm",
      "password": "zVkyZXeA9p6JIZW379uWYjq2YpaOtfWs",
      "database": "gqieavnm",
      "entities": [
          "dist/**/*.entity{.ts,.js}"
      ],
      "synchronize": true,
      "logging": true
    }),
UserModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
