import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Business } from "./business.entity";
import { BusinessLocation } from "./business-location.entity";
import { BusinessCard } from "./business-card.entity";

@Entity()
export class BusinessBranch extends BaseEntity {
  @Column({
    type: "varchar",
  })
  name: string;

  @Column({
    type: "varchar",
  })
  description: string;

  @Column({
    type: "uuid",
  })
  businessId: string;

  @ManyToOne(() => Business, (business) => business.branches)
  business: Business;

  @Column({
    type: "uuid",
  })
  locationId: string;

  @OneToOne(() => BusinessLocation, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: "locationId" })
  location: BusinessLocation;

  @Column({
    type: "uuid",
    nullable: true,
  })
  cardId: string;

  @OneToOne(() => BusinessCard, { cascade: true })
  @JoinColumn({
    name: "cardId",
  })
  card: BusinessCard;
}
