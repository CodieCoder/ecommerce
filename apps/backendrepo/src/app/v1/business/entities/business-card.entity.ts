import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { BusinessBranch } from "./business-branch.entity";
import {
  IBackground,
  IShopAddressBackground,
  IShopLogo,
  IShopNameConfig,
} from "../../types/business/card";

import { Business } from "./business.entity";

@Entity()
export class BusinessCard extends BaseEntity {
  @Column({
    type: "jsonb",
  })
  background: IBackground;

  @Column({ type: "varchar", nullable: true })
  backgroundOverlay: string;

  @Column({
    type: "jsonb",
  })
  nameConfig: IShopNameConfig;

  @Column({
    type: "varchar",
    nullable: true,
  })
  logo: string;

  @Column({
    type: "jsonb",
  })
  logoConfig: IShopLogo;

  @Column({ type: "varchar" })
  details: string;

  @Column({ type: "jsonb" })
  detailsConfig: IShopAddressBackground;

  @Column({ type: "jsonb" })
  addressConfig: IShopAddressBackground;

  @Column({
    type: "varchar",
    length: 130,
    nullable: true,
  })
  qrCodeBackground: string;

  @Column({
    type: "boolean",
    default: true,
    nullable: true,
  })
  enabled: boolean;

  @Column({ type: "uuid", nullable: true })
  businessId: string;

  @ManyToOne(() => Business, (business) => business.cards, {
    cascade: ["insert"],
  })
  business: Business;

  @Column({
    type: "uuid",
    unique: true,
    nullable: true,
  })
  branchId: string;

  @OneToOne(() => BusinessBranch, (branch) => branch.card)
  branch: BusinessBranch;
}
