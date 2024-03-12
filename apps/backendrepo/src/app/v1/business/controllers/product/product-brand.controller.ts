import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudController } from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../../../users/interceptors/user.interceptor";
import { ProductBrand } from "../../../entities/product-brand.entity";
import { ProductBrandService } from "../../services/product/product-brand.service";
import { CreateProductBrandDto } from "../../dto/product/create-product-brand.dto";

@Crud({
  model: {
    type: ProductBrand,
  },
  dto: {
    create: CreateProductBrandDto,
  },
})
@ApiTags("Product Brands")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "product-brand",
  version: "1",
})
export class ProductBrandController implements CrudController<ProductBrand> {
  constructor(public service: ProductBrandService) {}
}
