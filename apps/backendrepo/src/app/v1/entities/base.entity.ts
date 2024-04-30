import { Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  createdAt?: Date;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  createdBy?: string;

  @CreateDateColumn({
    type: 'timestamptz',
    nullable: true,
  })
  updatedAt?: Date;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  updatedBy?: string;

  @Column({
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt?: Date;

  @Column({
    type: 'boolean',
    default: true,
    nullable: true,
  })
  enabled: boolean;
}
