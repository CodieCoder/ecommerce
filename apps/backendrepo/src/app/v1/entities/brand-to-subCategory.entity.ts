import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class BrandToSubCategory extends BaseEntity {
  @Column("uuid")
  brandId: string;

  @Column("uuid")
  subCategoryId: string;
}
