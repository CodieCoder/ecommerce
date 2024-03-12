import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { BusinessToCategory } from "./business-to-category";
import { ProductSubCategory } from "./product-subCategory.entity";
import { BrandToCategory } from "./brand-to-category.entity";

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

  @OneToMany(() => BrandToCategory, (brand) => brand.categoryId, {
    cascade: true,
  })
  brands: BrandToCategory[];

  @OneToMany(
    () => ProductSubCategory,
    (subCategories) => subCategories.category
  )
  subCategories: ProductSubCategory[];
}
