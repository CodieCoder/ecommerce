import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudController } from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../../users/interceptors/user.interceptor";
import { BusinessCategory } from "../entities/business-category.entity";
import { BusinessCategoryService } from "../services/business-category.service";
import { CreateBusinessCategoryDto } from "../dto/create-business-category";

@Crud({
  model: {
    type: BusinessCategory,
  },
  dto: {
    create: CreateBusinessCategoryDto,
  },
})
@ApiTags("Business Category")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "category",
  version: "1",
})
export class BusinessCategoryController
  implements CrudController<BusinessCategory>
{
  constructor(public service: BusinessCategoryService) {}
}
