import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
import { ConfigService } from "@nestjs/config";
import { setValue } from "express-ctx";
import { IJwtPayload } from "../utils";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtConfig: ConfigService,
    private readonly authService: AuthService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.get("JWT_SECRET"),
    });
  }

  async validate(payload: IJwtPayload) {
    const result = await this.authService.validateJwt(payload);
    if (result) {
      return { userId: result.sub, email: result.email };
    } else {
      return false;
    }
  }
}
