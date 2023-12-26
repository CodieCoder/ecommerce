import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CardLinkTypeEnum, CardTypes } from "../utils/constants";
import { User } from "../../users/entities/user.entity";
@Entity()
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 10,
    nullable: true,
  })
  type: CardTypes;

  @Column({
    type: "jsonb",
  })
  background: {
    color: string | null;
    image: string | null;
  };

  @Column({
    type: "varchar",
    length: 100,
  })
  shopName: string;

  @Column({
    type: "jsonb",
  })
  shopNameConfig: {
    fontWeight: boolean;
    color: string;
  };

  @Column({
    type: "varchar",
    length: 250,
  })
  shopLogo: string;

  @Column({
    type: "jsonb",
  })
  shopLogoConfig: {
    rounded: number;
    size: number;
    opacity: number;
    borderWidth: string;
    borderColor: number;
  };

  @Column({
    type: "varchar",
    length: 130,
    nullable: true,
  })
  shopAddress: string;

  @Column({
    type: "jsonb",
    nullable: true,
  })
  shopAddressConfig: {
    colour: string;
    opacity: number;
    borderWidth: number;
    hide: boolean;
  };

  @Column({
    type: "varchar",
    length: 130,
  })
  shopDetails: string;

  @Column({
    type: "jsonb",
  })
  shopDetailsConfig: {
    color: string;
    opacity: number;
    borderWidth: number;
  };

  @Column({
    type: "jsonb",
    nullable: true,
  })
  links: {
    backgroundOpacity: number;
    link: string;
    type: CardLinkTypeEnum;
  };

  @Column({
    type: "boolean",
    default: true,
  })
  enabled: boolean;

  @Column({
    type: "uuid",
  })
  userId: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
