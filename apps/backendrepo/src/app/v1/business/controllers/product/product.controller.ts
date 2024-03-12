import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudController } from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../../../users/interceptors/user.interceptor";
import { CreateProductDto } from "../../dto/product/create-product.dto";
import { Product } from "../../../entities/product.entity";
import { ProductService } from "../../services/product/product.service";

@Crud({
  model: {
    type: Product,
  },
  dto: {
    create: CreateProductDto,
  },
})
@ApiTags("Products")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "product",
  version: "1",
})
export class ProductController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
