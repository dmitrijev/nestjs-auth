import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { AuthHelper } from '../auth/auth.helper';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule, JwtModule],
  controllers: [UserController],
  providers: [UserService, AuthService, AuthHelper],
})
export class UserModule {}
