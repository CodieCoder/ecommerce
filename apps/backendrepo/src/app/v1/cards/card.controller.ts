import { Controller } from '@nestjs/common'
import { CardService } from './card.service'
import { Crud, CrudController } from '@dataui/crud'
import { Card } from './entities/card.entity'

@Crud({
  model: {
    type: Card,
  },
})
@Controller({
  path: 'card',
  version: '1',
})
export class CardController implements CrudController<Card> {
  constructor(public service: CardService) {}
}
