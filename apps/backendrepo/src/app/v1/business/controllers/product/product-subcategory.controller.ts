import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudController } from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { ProductSubCategory } from "../../../entities/product-subCategory.entity";
import { UserInterceptor } from "../../../users/interceptors/user.interceptor";
import { ProductSubCategoryService } from "../../services/product/product-subCategory.service";
import { CreateProductSubCategoryDto } from "../../dto/product/create-product-subCategory.dto";

@Crud({
  model: {
    type: ProductSubCategory,
  },
  dto: {
    create: CreateProductSubCategoryDto,
  },
})
@ApiTags("Product Sub Categories")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "product-subcategory",
  version: "1",
})
export class ProductSubCategoryController
  implements CrudController<ProductSubCategory>
{
  constructor(public service: ProductSubCategoryService) {}
}
