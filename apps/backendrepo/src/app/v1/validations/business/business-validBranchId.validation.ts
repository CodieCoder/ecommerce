import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { BusinessBranchService } from "../../business/services/business.branch.service";

@ValidatorConstraint({ async: true })
export class ValidateBranchID implements ValidatorConstraintInterface {
  constructor(private readonly repo: BusinessBranchService) {}

  async validate(branchId: string) {
    if (!this.repo) return false;

    if (branchId && branchId.length > 10) {
      const branch = await this.repo.findOne({ where: { id: branchId } });
      if (branch) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  defaultMessage(): string {
    return "Business branch does not exist.";
  }
}
