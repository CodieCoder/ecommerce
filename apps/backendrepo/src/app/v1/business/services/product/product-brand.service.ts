import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductBrand } from "../../../entities/product-brand.entity";

@Injectable()
export class ProductBrandService extends TypeOrmCrudService<ProductBrand> {
  constructor(
    @InjectRepository(ProductBrand)
    productBrandRepository: Repository<ProductBrand>
  ) {
    super(productBrandRepository);
  }
}
