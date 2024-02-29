import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";

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
