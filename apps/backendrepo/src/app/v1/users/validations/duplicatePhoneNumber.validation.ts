import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { UserService } from "../user.service";

@ValidatorConstraint({ async: true })
export class PhoneNumberExist implements ValidatorConstraintInterface {
  constructor(private readonly userRepository: UserService) {}

  async validate(phoneNumber: string) {
    if (!this.userRepository) return false;
    console.log("Testee I ran!!");
    if (phoneNumber && phoneNumber.length > 8) {
      const user = await this.userRepository.findOneByPhoneNumber(phoneNumber);
      if (user) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    } //return true if phone number is empty. Its not required.
  }

  defaultMessage(): string {
    return "Phone number is already registered";
  }
}
