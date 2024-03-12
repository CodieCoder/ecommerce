import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { UserService } from "../../users/user.service";

@ValidatorConstraint({ async: true })
export class EmailExist implements ValidatorConstraintInterface {
  constructor(private readonly userRepository: UserService) {}

  async validate(email: string) {
    if (!this.userRepository) return false;
    if (!email) return false;
    const user = await this.userRepository.findOneByEmail(email);
    if (user) {
      return false;
    } else {
      return true;
    }
  }

  defaultMessage(): string {
    return "Email is already registered";
  }
}

// export function EmailNotRegistered(validationOptions?: ValidationOptions) {
//   return function (object: object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: UserEmailExist,
//     });
//   };
// }
