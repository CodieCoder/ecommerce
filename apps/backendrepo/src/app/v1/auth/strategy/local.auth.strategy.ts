import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserDto } from "../../users/dto/user.dto";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: "email", passwordField: "password" });
  }

  async validate(email: string, password: string): Promise<UserDto> {
    const user = await this.authService.validateUser({ email, password });
    if (!user) {
      throw new UnauthorizedException({
        status: false,
        message: "Invalid email/password",
      });
    }
    return user;
  }
}
