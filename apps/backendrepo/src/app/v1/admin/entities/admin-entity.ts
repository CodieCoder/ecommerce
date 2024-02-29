import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { Business } from "../../business/entities/business.entity";
import { User } from "../../users/entities/index";
import { AdminType } from "./type-admin.entity";
import { IsNotEmpty } from "class-validator";

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
