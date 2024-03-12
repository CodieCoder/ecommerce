import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductSubCategory } from "../../../entities/product-subCategory.entity";

@Injectable()
export class ProductSubCategoryService extends TypeOrmCrudService<ProductSubCategory> {
  constructor(
    @InjectRepository(ProductSubCategory)
    productSubcategoryRepository: Repository<ProductSubCategory>
  ) {
    super(productSubcategoryRepository);
  }
}
