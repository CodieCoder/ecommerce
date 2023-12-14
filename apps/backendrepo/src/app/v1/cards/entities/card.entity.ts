import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

enum CardLinkTypeEnum {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  LinkedIn = 'LinkedIn',
  Youtube = 'Youtube',
  Instagram = 'Instagram',
  Telegram = 'Telegram',
  Others = 'Others',
}

enum CardTypes {
  BusinessCard = 'BusinessCard',
  ShoppingCard = 'ShoppingCard',
  AdvertCard = 'AdvertCard',
}

@Entity()
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'varchar',
    length: 10,
  })
  cardType: CardTypes

  @Column({
    type: 'varchar',
    length: 500,
  })
  shopName: {
    name: string
    textColour: string
    textBoldness: boolean
  }

  @Column({
    type: 'varchar',
    length: 130,
  })
  aboutShop: {
    text: string
    backgroundOpacity: number
  }

  @Column({
    type: 'varchar',
    length: 500,
  })
  background: {
    image: string | null
    colour: string | null
  }

  @Column({
    type: 'varchar',
    length: 130,
  })
  shopAddress: {
    text: string | null
    backgroundOpacity: number
  }

  @Column({
    type: 'varchar',
    length: 130,
  })
  logo: {
    image: string
    roundness: number
    size: number
    borderWidth: number
    borderColour: string
    imageOpacity: number
  }

  @Column({
    type: 'varchar',
    length: 1000,
  })
  links: {
    link: string
    type: CardLinkTypeEnum
  }

  @Column({
    type: 'boolean',
  })
  enabled: boolean

  @Column({
    type: 'uuid',
  })
  userId: string
}
