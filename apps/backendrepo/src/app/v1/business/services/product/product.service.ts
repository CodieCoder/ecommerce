import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../../../entities/product.entity";

@Injectable()
export class ProductService extends TypeOrmCrudService<Product> {
  constructor(
    @InjectRepository(Product)
    productSubcategoryRepository: Repository<Product>
  ) {
    super(productSubcategoryRepository);
  }
}
