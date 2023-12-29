import { UserDto } from "../../dto/user.dto";

export interface IJwtLogin extends UserDto {
  loginDevice: string;
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
