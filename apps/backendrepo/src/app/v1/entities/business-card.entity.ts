import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { BusinessBranch } from "./business-branch.entity";
import {
  IShopAddressBackground,
  IShopLogo,
  IShopNameConfig,
} from "../types/business/card";

import { Business } from "./business.entity";
import { CloudFiles } from "./cloud-files.entity";

@Entity()
export class BusinessCard extends BaseEntity {
  @Column({
    type: "jsonb",
  })
  backgroundColor: string;

  @Column({ type: "varchar", nullable: true })
  backgroundOverlay: string;

  @Column({
    type: "jsonb",
  })
  nameConfig: IShopNameConfig;

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

  @OneToOne(() => CloudFiles, { cascade: true, eager: true })
  @JoinColumn()
  logo: CloudFiles;

  @OneToOne(() => CloudFiles, { cascade: true, eager: true })
  @JoinColumn()
  backgroundImage: CloudFiles;

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
