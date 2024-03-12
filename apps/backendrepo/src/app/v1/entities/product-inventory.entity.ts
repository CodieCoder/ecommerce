import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Product } from "./product.entity";

@Entity()
export class ProductInventory extends BaseEntity {
  @Column("int")
  quantity: number;

  @OneToOne(() => Product, (product) => product.inventory)
  product: Product;
}
