import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Business } from "./business.entity";
import { AdminType } from "./type-admin.entity";
import { IsNotEmpty } from "class-validator";
import { User } from "./user.entity";

@Entity()
export class Admin extends BaseEntity {
  @IsNotEmpty()
  @Column({
    type: "varchar",
    length: 25,
  })
  name: string;

  @Column({
    type: "varchar",
    length: 250,
  })
  description: string;

  @Column({
    type: "uuid",
  })
  typeId: string;

  @ManyToOne(() => AdminType, (adminType) => adminType.admins, {
    cascade: true,
  })
  type: AdminType;

  @Column({
    type: "uuid",
  })
  businessId: string;

  @ManyToOne(() => Business, (business) => business.admins)
  business: Business;

  @Column({
    type: "uuid",
  })
  userId: string;

  @ManyToOne(() => User, (user) => user.admin)
  user: User;
}
