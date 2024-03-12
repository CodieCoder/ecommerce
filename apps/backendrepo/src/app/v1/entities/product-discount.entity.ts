import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class ProductDiscount extends BaseEntity {
  @Column("varchar")
  name: string;

  @Column("varchar")
  description: string;

  @Column("numeric", { precision: 10, scale: 4 })
  percent: number;
}
