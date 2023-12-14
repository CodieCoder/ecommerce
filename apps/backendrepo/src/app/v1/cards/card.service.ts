import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Card } from './entities/card.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CardService extends TypeOrmCrudService<Card> {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
  ) {
    super(cardRepository)
  }
}
