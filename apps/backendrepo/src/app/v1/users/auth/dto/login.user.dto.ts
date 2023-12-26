import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
