import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Request,
  ServiceUnavailableException,
  UnauthorizedException,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from "@dataui/crud";
import { User } from "./entities/user.entity";
import { Request as ExpressRequest } from "express";
import { UserInterceptor } from "./interceptors/user.interceptor";
import { PROPERTY_DEPS_METADATA } from "@nestjs/common/constants";
import { LoginUserDto } from "./dto/Login-user.dto";

// @Crud({
//   model: {
//     type: User,
//   },
//   // dto: {
//   //   create: CreateUserDto,
//   // },
// })
@UseInterceptors(ClassSerializerInterceptor)
@Controller({
  path: "user",
  version: "1",
})

// export class UserController implements CrudController<User> {
export class UserController {
  constructor(private readonly userService: UserService) {}

  // get base(): CrudController<User> {
  //   return this;
  // }

  // @Override()
  // createOne(
  //   @Request() requestObject: ExpressRequest,
  //   @ParsedRequest() req: CrudRequest,
  //   @ParsedBody() dto: CreateUserDto
  // ) {
  //   console.log("Testee requestObject: ", dto);
  //   // console.log("Testee requestObject: ", requestObject.ip);
  //   return this.base.createOneBase(req, {
  //     ...dto,
  //     registrationIpAddress: requestObject.ip,
  //   } as any);
  // }

  @Post("signup")
  @UseInterceptors(UserInterceptor)
  async signUp(@Body() user: CreateUserDto): Promise<string> {
    const didCreate = await this.userService.registerUser(user);
    if (didCreate) {
      return "success";
    } else {
      throw new ServiceUnavailableException("Unable to create account.");
    }
  }

  @Post("signin")
  @UseInterceptors(UserInterceptor)
  async login(@Body() user: LoginUserDto) {
    console.log("Testee login controller : ", user);
    const checkUser = await this.userService.loginUser(user);
    if (checkUser) {
      return checkUser;
    } else {
      throw new UnauthorizedException("Invalid email and/or password.");
    }
  }
}
