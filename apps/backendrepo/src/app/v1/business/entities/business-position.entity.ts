import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { User } from "../../users/entities/user.entity";
import { Business } from "./business.entity";

@Entity()
export class BusinessPosition extends BaseEntity {
  @Column({
    type: "varchar",
  })
  description;

  @Column({
    type: "varchar",
  })
  position: string;

  @Column({ type: "uuid" })
  businessId: string;

  @ManyToOne(() => Business, (business) => business.positions, {
    cascade: true,
  })
  business: Business;

  @OneToMany(() => User, (user) => user.businessPosition, {
    cascade: true,
  })
  users: User[];
}
