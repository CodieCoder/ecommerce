import {
  IsDate,
  IsEmail,
  IsEnum,
  IsIP,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsPostalCode,
  IsString,
  IsStrongPassword,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { EmailExist } from '../validations/email-not-regsitered-rule';
import { Type } from 'class-transformer';
import { PhoneNumberExist } from '../validations/duplicatePhoneNumber.validation';
import { AccountTypesEnum, GenderEnum } from '../../constants/users.constants';

export class CreateUserDto {
  // firstName, lastName, middleName, email, password, phoneNumber, gender, country, state, city, postalCode, dateOfBirth

  @IsString()
  @MinLength(2, { message: 'First name must have atleast 2 characters' })
  @MaxLength(30, { message: 'First name can not be more than 30 characters' })
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MinLength(2, { message: 'Last name must have atleast 2 characters' })
  @MaxLength(30, { message: 'Last name can not be more than 30 characters' })
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @MinLength(2, { message: 'First name must have atleast 2 characters' })
  @MaxLength(30, { message: 'Middle name can not be more than 30 characters' })
  @IsOptional()
  middleName?: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please provide valid email' })
  @Validate(EmailExist)
  email: string;

  @IsNotEmpty()
  @IsStrongPassword(
    { minLength: 8 },
    {
      message:
        'Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    }
  )
  // @Matches(passwordRegEx, {
  //   message:
  //     "Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
  //   // groups: [UPDATE],
  // })
  password: string;

  @Validate(PhoneNumberExist)
  @IsPhoneNumber()
  @IsOptional()
  phoneNumber: string;

  @IsNotEmpty()
  @IsEnum(GenderEnum, { message: 'Invalid gender' })
  gender: GenderEnum;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate({ message: 'Invalid date of birth value' })
  dateOfBirth: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsString()
  @IsOptional()
  state: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsPostalCode()
  @IsOptional()
  postalCode: string;

  @IsNotEmpty()
  @IsEnum(AccountTypesEnum, { message: 'Invalid account type' })
  accountType: AccountTypesEnum;

  @IsNotEmpty()
  @IsString()
  registrationDevice: string;

  @IsNotEmpty()
  @IsIP(null, { message: 'Invalid access' })
  userIP: string;
}
