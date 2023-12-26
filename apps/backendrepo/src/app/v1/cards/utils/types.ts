import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CardLinkTypeEnum, CardTypes } from "./constants";

export class CardLink {
  @IsNotEmpty()
  @IsNumber()
  backgroundOpacity: number;

  @IsNotEmpty()
  @IsString()
  link: string;

  @IsNotEmpty()
  @IsEnum(CardLinkTypeEnum, { message: "Invalid card type" })
  type: CardLinkTypeEnum;
}

export interface IAddCard {
  id: string;
  type: CardTypes;
  background: {
    color: string | null;
    image: string | null;
  };
  nameConfig: {
    fontWeight: boolean;
    color: string;
  };
  logoConfig: {
    rounded: number;
    size: number;
    opacity: number;
    borderWidth: string;
    borderColor: number;
  };
  addressConfig: {
    colour: string;
    opacity: number;
    borderWidth: number;
    hide: boolean;
  };
  details: string;
  detailsConfig: {
    color: string;
    opacity: number;
    borderWidth: number;
  };
  links: CardLink[];
  enabled: boolean;
  userId: string;
}
