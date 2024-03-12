import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Exclude } from "class-transformer";

@Entity()
export class CloudFiles {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn({
    type: "timestamptz",
    nullable: true,
  })
  createdAt?: Date;

  @Column({
    type: "varchar",
    nullable: true,
  })
  createdBy?: string;

  @CreateDateColumn({
    type: "timestamptz",
    nullable: true,
  })
  updatedAt?: Date;

  @Column({
    type: "varchar",
    nullable: true,
  })
  updatedBy?: string;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  deletedAt?: Date;

  @Column({
    type: "boolean",
    default: true,
    nullable: true,
  })
  enabled: boolean;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  fileId: string;

  @Column()
  mimeType: string;

  @Column()
  url: string;

  @Column()
  sizeOriginal: number;

  @Column()
  @Exclude()
  bucketId: string;

  @Column()
  @Exclude()
  signature: string;
}
