import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudController } from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../../../users/interceptors/user.interceptor";
import { ProductDiscount } from "../../../entities/product-discount.entity";
import { CreateProductDiscountDto } from "../../dto/product/create-product-discount.dto";
import { ProductDiscountService } from "../../services/product/product-discount.service";

@Crud({
  model: {
    type: ProductDiscount,
  },
  dto: {
    create: CreateProductDiscountDto,
  },
})
@ApiTags("Product discount")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "product-discount",
  version: "1",
})
export class ProductDiscountController
  implements CrudController<ProductDiscount>
{
  constructor(public service: ProductDiscountService) {}
}
