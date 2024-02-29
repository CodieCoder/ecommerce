import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../common/entities/base.entity";
import { BusinessLocation } from "./business-location.entity";

@Entity()
export class Telephone extends BaseEntity {
  @Column({
    type: "varchar",
  })
  countryCode: number;

  @Column({
    type: "varchar",
  })
  telephone: string;

  @ManyToOne(() => BusinessLocation, (location) => location.telephones)
  location: BusinessLocation;
}
