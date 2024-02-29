import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { BusinessBranch } from "./business-branch.entity";
import { Admin } from "../../admin/entities/admin-entity";
import { User } from "../../users/entities/user.entity";
import { BusinessToCategory } from "./business-to-category";
import { BusinessPosition } from "./business-position.entity";
import { BusinessCard } from "./business-card.entity";

@Entity()
export class Business extends BaseEntity {
  @Column({
    type: "varchar",
    length: 100,
    unique: true,
  })
  name: string;

  @Column({
    type: "text",
  })
  description: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  logo: string;

  @Column({
    type: "uuid",
  })
  userId: string;

  @ManyToOne(() => User, (user) => user.businesses, {
    cascade: true,
  })
  user: User;

  @OneToMany(() => BusinessBranch, (branch) => branch.business, {
    cascade: true,
  })
  branches: BusinessBranch[];

  @OneToMany(() => Admin, (admin) => admin.business, {
    cascade: true,
  })
  admins: Admin[];

  @OneToMany(() => BusinessToCategory, (category) => category.businessId, {
    cascade: true,
  })
  categories: BusinessToCategory[];

  @OneToMany(() => BusinessPosition, (position) => position.business)
  positions: BusinessPosition[];

  @OneToMany(() => BusinessCard, (card) => card.business)
  cards: BusinessCard[];
}
