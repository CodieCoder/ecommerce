import { Injectable } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "../users/dto/user.dto";
import { ConfigService } from "@nestjs/config";
import { LoginDTO } from "./dto/login.user.dto";
import { IJwtLogin, IJwtOutput, IJwtPayload } from "./utils/types";
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
    const payload: IJwtPayload = {
      sub: user.id,
      email: user.email,
      extra: user.userIP,
      info: user.userDevice,
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

  async validateJwt(payload: IJwtPayload): Promise<IJwtPayload | false> {
    if (
      !payload ||
      !payload?.email ||
      !payload?.extra ||
      !payload?.info ||
      !payload?.sub
    ) {
      return false;
    }
    const user = await this.usersService.findOneById(payload.sub);

    if (user) {
      return payload;
    } else {
      return false;
    }
  }
}
