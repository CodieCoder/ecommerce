import { UserDto } from "../../users/dto/user.dto";

export interface IJwtLogin extends UserDto {
  userDevice: string;
  userIP: string;
}

export interface IJwtOutput {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  userId: string;
  access_token: string;
}

export interface IJwtPayload {
  sub: string;
  email: string;
  extra: string;
  info: string;
}
