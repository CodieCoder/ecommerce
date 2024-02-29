import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { Admin } from "./admin-entity";

@Entity()
export class AdminType extends BaseEntity {
  @Column({
    type: "varchar",
    length: 25,
    default: "AdminType",
  })
  name: string;

  @Column({
    type: "varchar",
    length: 250,
    nullable: true,
  })
  description: string;

  @Column({
    type: "boolean",
    default: true,
  })
  createAdmin: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  updateAdmin: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  deleteAdmin: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  updateBusiness: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  updateCard: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  updatePage: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  createProduct: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  updateProduct: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  deleteProduct: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  createSales: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  updateSales: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  deleteSales: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  createStaff: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  updateStaff: boolean;

  @Column({
    type: "boolean",
    default: true,
  })
  deleteStaff: boolean;

  @OneToMany(() => Admin, (admin) => admin.type)
  admins: Admin[];
}
