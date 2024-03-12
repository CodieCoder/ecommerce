import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Product } from "./product.entity";
import { BusinessCategory } from "./business-category.entity";
import { BrandToSubCategory } from "./brand-to-subCategory.entity";

@Entity()
export class ProductSubCategory extends BaseEntity {
  @Column("varchar")
  name: string;

  @Column("varchar")
  description: string;

  @Column("uuid")
  categoryId: string;

  @OneToOne(() => BusinessCategory, (category) => category.subCategories, {
    cascade: true,
  })
  @JoinColumn({ name: "categoryId" })
  category: BusinessCategory;

  @OneToMany(() => BrandToSubCategory, (brand) => brand.subCategoryId)
  brands: BrandToSubCategory[];

  @OneToMany(() => Product, (product) => product.subCategory)
  products: Product[];
}
