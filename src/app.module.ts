import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_practica',
      password: 'root',
      database: 'db_practica',
      autoLoadEntities: true,
      synchronize: true,
    }),

    EmployeesModule,
    UsersModule,
    AuthModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
