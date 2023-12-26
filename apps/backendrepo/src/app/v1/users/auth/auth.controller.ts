import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller({
  path: "auth",
  version: "1",
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard("local"))
  @Post()
  async loginUser(@Request() @Body() req) {
    return this.authService.loginWtihCredentials(req);
  }
}
