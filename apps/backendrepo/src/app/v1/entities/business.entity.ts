import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { BaseEntity } from "./base.entity";
import { BusinessBranch } from "./business-branch.entity";
import { Admin } from "./admin-entity";
import { User } from "./user.entity";
import { BusinessToCategory } from "./business-to-category";
import { BusinessPosition } from "./business-position.entity";
import { BusinessCard } from "./business-card.entity";
import { CloudFiles } from "./cloud-files.entity";

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

  @OneToOne(() => CloudFiles, { cascade: true })
  @JoinColumn()
  logo: CloudFiles;

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
