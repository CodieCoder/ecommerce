import { Controller } from "@nestjs/common";
import { CardService } from "./card.service";
import { Crud, CrudAuth, CrudController } from "@dataui/crud";
import { Card } from "./entities/card.entity";
import { User } from "../users/entities/user.entity";
import { CreateCardDto } from "./dto/create.card.dto";
import { ApiTags } from "@nestjs/swagger";

@Crud({
  model: {
    type: CreateCardDto,
  },
})
// @CrudAuth({
//   property: "user",
//   filter: (user: User) => {
//     console.log("Testee user : ", user);
//     return { user: user.id };
//   },
// })
@ApiTags("Cards")
@Controller({
  path: "card",
  version: "1",
})
export class CardController implements CrudController<Card> {
  constructor(public service: CardService) {}
}
