import { Injectable, UnauthorizedException } from "@nestjs/common";
import { User } from "../entities/user.entity";
import { LoginUserDto } from "../dto/Login-user.dto";
import { UserService } from "../user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUserCredentials(
    userAuth: LoginUserDto
  ): Promise<Partial<User | null>> {
    return await this.usersService.loginUser(userAuth);
  }

  async loginWtihCredentials(userAuth: any): Promise<any> {
    const payload = { email: userAuth.email };
    const validate = await this.validateUserCredentials(userAuth);
    if (!validate) {
      throw new UnauthorizedException({
        status: false,
        message: "User doesn't exist",
      });
    }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
