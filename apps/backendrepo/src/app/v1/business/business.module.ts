import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Business } from "./entities/business.entity";
import { BusinessController } from "./business.controller";
import { BusinessService } from "./business.service";
import { BusinessCategoryController } from "./controllers/business-category.controller";
import { BusinessCategoryService } from "./services/business-category.service";
import { BusinessCategory } from "./entities/business-category.entity";
import { BusinessNameExist } from "../validations/business/businessNameExist";
import { Admin } from "../admin/entities/admin-entity";
import { BusinessBranch } from "./entities/business-branch.entity";
import { BusinessLocation } from "./entities/business-location.entity";
import { AdminType } from "../admin/entities/type-admin.entity";
import { Telephone } from "./entities/telephone.entity";
import { BusinessToCategory } from "./entities/business-to-category";
import { BusinessBranchService } from "./services/business.branch.service";
import { BusinessCard } from "./entities/business-card.entity";
import { BusinessCardService } from "./services/business-card.service";
import { BusinessCardController } from "./controllers/business-card.controller";
import { ValidateBranchID } from "../validations/business/business-validBranchId.validation";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Admin,
      AdminType,
      Business,
      BusinessCategory,
      BusinessBranch,
      BusinessLocation,
      BusinessToCategory,
      BusinessCard,
      Telephone,
    ]),
  ],
  controllers: [
    BusinessController,
    BusinessCategoryController,
    BusinessCardController,
  ],
  providers: [
    BusinessService,
    BusinessCategoryService,
    BusinessBranchService,
    BusinessNameExist,
    ValidateBranchID,
    BusinessCardService,
  ],
  exports: [
    BusinessService,
    BusinessCategoryService,
    BusinessBranchService,
    BusinessCardService,
  ],
})
export class BusinessModule {}
