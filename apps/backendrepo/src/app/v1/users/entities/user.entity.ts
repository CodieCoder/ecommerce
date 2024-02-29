import { Exclude } from "class-transformer";
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { AccountTypesEnum } from "../../constants/users.constants";
import { BaseEntity } from "../../common/entities/base.entity";
import { Business } from "../../business/entities/business.entity";
import { Admin } from "../../admin/entities/admin-entity";
import { BusinessPosition } from "../../business/entities/business-position.entity";

@Entity()
export class User extends BaseEntity {
  @Column({
    type: "varchar",
    length: 55,
  })
  firstName: string;

  @Column({
    type: "varchar",
    length: 55,
    nullable: true,
  })
  middleName: string;

  @Column({
    type: "varchar",
    length: 50,
  })
  lastName: string;

  @Column({
    type: "varchar",
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    type: "varchar",
    length: 250,
  })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({
    type: "varchar",
    length: 25,
    unique: true,
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    type: "varchar",
    length: 10,
  })
  gender: string;

  @Column({
    type: "varchar",
    length: 40,
    nullable: true,
  })
  dateOfBirth: string;

  @Column({
    type: "varchar",
    length: 65,
  })
  country: string;

  @Column({
    type: "varchar",
    length: 65,
    nullable: true,
  })
  state: string;

  @Column({
    type: "varchar",
    length: 65,
    nullable: true,
  })
  city: string;

  @Column({
    type: "varchar",
    length: 8,
    nullable: true,
  })
  postalCode: string;

  @Column({
    type: "varchar",
    length: 8,
    nullable: false,
    default: AccountTypesEnum.Buyer,
  })
  accountType: string;

  @Column({
    type: "text",
  })
  registrationDevice: string;

  @Column({
    type: "varchar",
    length: 20,
  })
  registrationIpAddress;

  @Column({
    type: "int",
    default: 0,
  })
  verificationLevel: number;

  @OneToMany(() => Admin, (admin) => admin.user)
  admin: Admin[];

  @OneToMany(() => Business, (business) => business.user)
  businesses: Business[];

  @Column({ type: "uuid", nullable: true })
  businessPositionId: string;

  @ManyToOne(
    () => BusinessPosition,
    (businessPosition) => businessPosition.users
  )
  businessPosition: BusinessPosition;
}
