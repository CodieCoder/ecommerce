import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { ProductDiscountService } from "../../business/services/product/product-discount.service";

@ValidatorConstraint({ async: true })
export class ProductDiscountExist implements ValidatorConstraintInterface {
  constructor(private readonly discountRepository: ProductDiscountService) {}

  async validate(name: string) {
    if (!this.discountRepository) return false;

    if (name && name.length > 2) {
      const discount = await this.discountRepository.findOne({
        where: {
          name: name,
        },
      });
      if (discount) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  defaultMessage(): string {
    return "Discount name already exist.";
  }
}
