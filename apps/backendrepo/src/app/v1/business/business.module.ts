import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Business } from "../entities/business.entity";
import { BusinessController } from "./business.controller";
import { BusinessService } from "./business.service";
import { BusinessCategoryController } from "./controllers/business-category.controller";
import { BusinessCategoryService } from "./services/business-category.service";
import { BusinessCategory } from "../entities/business-category.entity";
import { BusinessNameExist } from "../validations/business/businessNameExist.validation";
import { Admin } from "../entities/admin-entity";
import { BusinessBranch } from "../entities/business-branch.entity";
import { BusinessLocation } from "../entities/business-location.entity";
import { AdminType } from "../entities/type-admin.entity";
import { Telephone } from "../entities/telephone.entity";
import { BusinessToCategory } from "../entities/business-to-category";
import { BusinessBranchService } from "./services/business.branch.service";
import { BusinessCard } from "../entities/business-card.entity";
import { BusinessCardService } from "./services/business-card.service";
import { BusinessCardController } from "./controllers/business-card.controller";
import { ValidateBranchID } from "../validations/business/business-validBranchId.validation";
import { ProductSubCategoryController } from "./controllers/product/product-subcategory.controller";
import { ProductSubCategoryService } from "./services/product/product-subCategory.service";
import { ProductSubCategory } from "../entities/product-subCategory.entity";
import { ProductController } from "./controllers/product/product.controller";
import { ProductService } from "./services/product/product.service";
import { Product } from "../entities/product.entity";
import { ProductBrandController } from "./controllers/product/product-brand.controller";
import { ProductBrandService } from "./services/product/product-brand.service";
import { ProductBrand } from "../entities/product-brand.entity";
import { BrandToCategory } from "../entities/brand-to-category.entity";
import { BrandToSubCategory } from "../entities/brand-to-subCategory.entity";
import { NestjsFormDataModule } from "nestjs-form-data";
import { FormDataConfigService } from "../lib/formData";
import { BusinessCategoryExist } from "../validations/business/businessCategoryExist.validation";
import { ProductDiscountService } from "./services/product/product-discount.service";
import { ProductDiscount } from "../entities/product-discount.entity";
import { ProductDiscountController } from "./controllers/product/product-discount.controller";
import { ProductDiscountExist } from "../validations/product/product-discountNameExist.validation";

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
      ProductSubCategory,
      Product,
      ProductBrand,
      BrandToCategory,
      BrandToSubCategory,
      ProductDiscount,
    ]),
    NestjsFormDataModule.configAsync({
      useClass: FormDataConfigService,
    }),
  ],
  controllers: [
    BusinessController,
    BusinessCategoryController,
    BusinessCardController,
    ProductSubCategoryController,
    ProductController,
    ProductBrandController,
    ProductDiscountController,
  ],
  providers: [
    BusinessService,
    BusinessCategoryService,
    BusinessBranchService,
    BusinessNameExist,
    ValidateBranchID,
    BusinessCardService,
    ProductSubCategoryService,
    ProductService,
    ProductBrandService,
    ProductDiscountService,
    BusinessCategoryExist,
    ProductDiscountExist,
  ],
  exports: [
    BusinessService,
    BusinessCategoryService,
    BusinessBranchService,
    BusinessCardService,
    ProductSubCategoryService,
    ProductService,
    ProductBrandService,
    ProductDiscountService,
  ],
})
export class BusinessModule {}
