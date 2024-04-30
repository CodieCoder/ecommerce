import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { EmailExist } from '../validations/user/email-not-regsitered-rule';
import { PhoneNumberExist } from '../validations/user/duplicatePhoneNumber.validation';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule, HttpModule],
  providers: [UserService, AuthService, EmailExist, PhoneNumberExist],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
