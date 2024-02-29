import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { BusinessToCategory } from "./business-to-category";

@Entity()
export class BusinessCategory extends BaseEntity {
  @Column({
    type: "varchar",
    unique: true,
  })
  name: string;

  @Column({
    type: "varchar",
  })
  description: string;

  @OneToMany(() => BusinessToCategory, (category) => category.categoryId, {
    cascade: true,
  })
  businesses: BusinessToCategory[];
}
