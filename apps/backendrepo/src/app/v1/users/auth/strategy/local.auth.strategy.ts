import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { LoginUserDto } from "../../dto/Login-user.dto";
import { User } from "../../entities/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(userAuth: LoginUserDto): Promise<Partial<User>> {
    const user = await this.authService.validateUserCredentials(userAuth);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
