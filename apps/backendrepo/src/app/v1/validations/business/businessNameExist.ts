import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { BusinessService } from "../../business/business.service";

@ValidatorConstraint({ async: true })
export class BusinessNameExist implements ValidatorConstraintInterface {
  constructor(private readonly businessRepository: BusinessService) {}

  async validate(name: string) {
    if (!this.businessRepository) return false;

    if (name && name.length > 2) {
      const business = await this.businessRepository.findOne({
        where: {
          name: name,
        },
      });
      if (business) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  defaultMessage(): string {
    return "Business name already exist.";
  }
}
