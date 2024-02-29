import { Controller, UseInterceptors } from "@nestjs/common";
import { BusinessCardService } from "../services/business-card.service";
import { Crud, CrudController } from "@dataui/crud";
import { BusinessCard } from "../entities/business-card.entity";
import { UpdateCardDto } from "../dto/update-business-card.dto";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../../users/interceptors/user.interceptor";

@Crud({
  model: {
    type: BusinessCard,
  },
  dto: {
    update: UpdateCardDto,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true,
    },
  },
  routes: {
    only: ["updateOneBase", "getManyBase", "getOneBase"],
    updateOneBase: {
      allowParamsOverride: true,
    },
  },
})
@ApiTags("Cards")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "card",
  version: "1",
})
export class BusinessCardController implements CrudController<BusinessCard> {
  constructor(public service: BusinessCardService) {}
}
