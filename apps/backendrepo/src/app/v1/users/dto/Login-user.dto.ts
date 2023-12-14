import { IsEmail, IsIP, IsNotEmpty, IsStrongPassword } from "class-validator";

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword(
    { minLength: 8 },
    {
      message: "Invalid password",
    }
  )
  password: string;

  @IsNotEmpty()
  @IsIP(null, { message: "Invalid access" })
  userIP: string;
}
