import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDiscount } from "../../../entities/product-discount.entity";

@Injectable()
export class ProductDiscountService extends TypeOrmCrudService<ProductDiscount> {
  constructor(
    @InjectRepository(ProductDiscount)
    productDiscountRepository: Repository<ProductDiscount>
  ) {
    super(productDiscountRepository);
  }
}
