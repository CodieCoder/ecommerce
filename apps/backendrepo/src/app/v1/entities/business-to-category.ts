import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class BusinessToCategory extends BaseEntity {
  @Column({
    type: "uuid",
  })
  businessId: string;

  @Column({
    type: "uuid",
  })
  categoryId: string;
}
