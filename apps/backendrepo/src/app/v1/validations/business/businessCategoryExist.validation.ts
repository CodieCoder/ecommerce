import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { BusinessCategoryService } from "../../business/services/business-category.service";

@ValidatorConstraint({ async: true })
export class BusinessCategoryExist implements ValidatorConstraintInterface {
  constructor(private readonly categoryService: BusinessCategoryService) {}

  async validate(name: string) {
    if (!this.categoryService) return false;
    if (name && name.length > 2) {
      const business = await this.categoryService.findOne({
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
    return "Business Category name already exist.";
  }
}
