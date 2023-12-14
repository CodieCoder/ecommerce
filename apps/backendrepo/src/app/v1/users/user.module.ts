import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { EmailExist } from "./validations/email-not-regsitered-rule";
import { PhoneNumberExist } from "./validations/duplicatePhoneNumber.validation";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, EmailExist, PhoneNumberExist],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
