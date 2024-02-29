import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BusinessCategory } from "../entities/business-category.entity";

@Injectable()
export class BusinessCategoryService extends TypeOrmCrudService<BusinessCategory> {
  constructor(
    @InjectRepository(BusinessCategory)
    businessCategory: Repository<BusinessCategory>
  ) {
    super(businessCategory);
  }
}
