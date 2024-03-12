import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class BrandToCategory extends BaseEntity {
  @Column({
    type: "uuid",
  })
  brandId: string;

  @Column({
    type: "uuid",
  })
  categoryId: string;
}
