import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Product } from "./product.entity";
import { BrandToCategory } from "./brand-to-category.entity";
import { BrandToSubCategory } from "./brand-to-subCategory.entity";

@Entity()
export class ProductBrand extends BaseEntity {
  @Column("varchar", { unique: true })
  name: string;

  @Column("varchar")
  description: string;

  @Column("varchar", { nullable: true })
  logo: string;

  @OneToMany(() => Product, (product) => product.brand)
  products: Product[];

  @OneToMany(() => BrandToCategory, (category) => category.brandId, {
    cascade: true,
  })
  categories: BrandToCategory[];

  @OneToMany(() => BrandToSubCategory, (subCategory) => subCategory.brandId)
  subCategories: BrandToSubCategory[];
}
