import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Request,
  ServiceUnavailableException,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserInterceptor } from "./interceptors/user.interceptor";
import { Public } from "../auth/public.auth";
import { LocalAuthGuard } from "../auth/guard/local.auth.guard";
import { AuthService } from "../auth/auth.service";

@UseInterceptors(ClassSerializerInterceptor)
@Controller({
  path: "user",
  version: "1",
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  @Public()
  @Post("signup")
  @UseInterceptors(UserInterceptor)
  async signUp(@Body() user: CreateUserDto): Promise<string> {
    console.log("Testee user : ", user);
    const didCreate = await this.userService.registerUser(user);
    if (didCreate) {
      return "success";
    } else {
      throw new ServiceUnavailableException("Unable to create account.");
    }
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post("login")
  @UseInterceptors(UserInterceptor)
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
