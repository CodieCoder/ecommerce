import { Injectable } from "@nestjs/common";
import { UserService } from "../user.service";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "../dto/user.dto";
import { ConfigService } from "@nestjs/config";
import { LoginDTO } from "./dto/login.user.dto";
import { IJwtLogin, IJwtOutput } from "./utils.ts/types";
import * as Bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private jwtConfig: ConfigService
  ) {}

  async validateUser(userAuth: LoginDTO): Promise<UserDto | null> {
    const user = await this.usersService.findOneByEmail(userAuth.email);
    if (user) {
      const isPasswordMatched = await Bcrypt.compare(
        userAuth.password,
        user.password
      );
      if (isPasswordMatched) {
        const { password, ...result } = user;
        return result;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  async login(user: IJwtLogin): Promise<IJwtOutput> {
    const payload = {
      sub: user.id,
      email: user.email,
      extra: user.userIP,
      info: user.loginDevice,
    };
    return {
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      userId: user.id,
      access_token: this.jwtService.sign(payload, {
        secret: this.jwtConfig.get("JWT_SECRET"),
      }),
    };
  }
}
