import { Test, TestingModule } from '@nestjs/testing'
import { CardController } from './card.controller'
import { CardService } from './card.service'

describe('CardsController', () => {
  let controller: CardController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardController],
      providers: [CardService],
    }).compile()

    controller = module.get<CardController>(CardController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
