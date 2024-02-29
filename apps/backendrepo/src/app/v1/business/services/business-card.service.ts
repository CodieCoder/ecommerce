import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@dataui/crud-typeorm";
import { BusinessCard } from "../entities/business-card.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class BusinessCardService extends TypeOrmCrudService<BusinessCard> {
  constructor(
    @InjectRepository(BusinessCard) cardRepository: Repository<BusinessCard>
  ) {
    super(cardRepository);
  }
}
