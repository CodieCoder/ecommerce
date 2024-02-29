import { Controller, UseInterceptors } from "@nestjs/common";
import { Crud, CrudAuth, CrudController } from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../users/interceptors/user.interceptor";
import { CreateBusinessDto } from "./dto/create-business.dto";
import { Business } from "./entities/business.entity";
import { BusinessService } from "./business.service";
import { BusinessCreateInterceptor } from "../interceptors/business/createBusiness.interceptor";
import { User } from "../users";
import { IJwtPayload } from "../auth";

@Crud({
  model: {
    type: Business,
  },
  dto: {
    create: CreateBusinessDto,
  },
  query: {
    join: {
      branches: {
        persist: ["id"],
      },
      "branches.location": {
        persist: ["id"],
      },
      "branches.card": {
        persist: ["id"],
      },
    },
  },
  routes: {
    createOneBase: {
      interceptors: [BusinessCreateInterceptor],
    },
  },
})
@ApiTags("Business")
@UseInterceptors(UserInterceptor)
@CrudAuth({
  property: "user",
  filter: (user) => ({ userId: user.userId }),
})
@Controller({
  path: "business",
  version: "1",
})
export class BusinessController implements CrudController<Business> {
  constructor(public service: BusinessService) {}
}
