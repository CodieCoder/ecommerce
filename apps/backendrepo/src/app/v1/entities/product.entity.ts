import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ProductInventory } from "./product-inventory.entity";
import { ProductBrand } from "./product-brand.entity";
import { ProductSubCategory } from "./product-subCategory.entity";
import { ProductDiscount } from "./product-discount.entity";

@Entity()
export class Product extends BaseEntity {
  @Column({
    type: "varchar",
  })
  name: string;

  @Column({
    type: "text",
  })
  description: string;

  @Column({
    type: "varchar",
  })
  sku: string;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  price: number;

  @Column("uuid")
  inventoryId: string;

  @OneToOne(
    () => ProductInventory,
    (productInventory) => productInventory.product,
    { cascade: true }
  )
  @JoinColumn({ name: "inventoryId" })
  inventory: ProductInventory;

  @Column("uuid")
  brandId: string;

  @ManyToOne(() => ProductBrand, (brand) => brand.products)
  @JoinColumn({ name: "brandId" })
  brand: ProductBrand;

  @Column("uuid")
  subCategoryId: string;

  @ManyToOne(() => ProductSubCategory, (subCategory) => subCategory.products, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "subCategoryId" })
  subCategory: ProductSubCategory;

  @ManyToOne(() => ProductDiscount, (discount) => discount.products)
  discount: ProductDiscount;
}
