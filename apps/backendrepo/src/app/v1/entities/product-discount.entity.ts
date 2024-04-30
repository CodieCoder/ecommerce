import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Product } from "./product.entity";

@Entity()
export class ProductDiscount extends BaseEntity {
  @Column("varchar", {
    unique: true,
  })
  name: string;

  @Column("varchar")
  description: string;

  @Column("numeric", { precision: 10, scale: 4 })
  percent: number;

  @Column("date")
  startDate: string;

  @Column("date")
  endDate: string;

  @OneToMany(() => Product, (product) => product.discount)
  products: Product[];
}
