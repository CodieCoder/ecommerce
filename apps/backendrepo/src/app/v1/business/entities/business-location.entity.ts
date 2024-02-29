import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { BusinessBranch } from "./business-branch.entity";
import { Telephone } from "./telephone.entity";

@Entity()
export class BusinessLocation extends BaseEntity {
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
    type: "varchar",
    nullable: true,
  })
  email: string;

  @Column({
    type: "varchar",
    length: 65,
  })
  address: string;

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

  @OneToMany(() => Telephone, (telephone) => telephone.location, {
    cascade: true,
    nullable: true,
  })
  telephones: Telephone[];

  @OneToOne(() => BusinessBranch, (branch) => branch.location)
  branch: BusinessBranch;
}
