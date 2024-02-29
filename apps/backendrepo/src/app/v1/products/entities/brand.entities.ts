import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";

@Entity()
export class Product extends BaseEntity {
  @Column({
    type: "varchar",
  })
  name: string;

  @Column({
    type: "decimal",
  })
  price: number;

  @Column({
    type: "text",
  })
  description: string;
}
