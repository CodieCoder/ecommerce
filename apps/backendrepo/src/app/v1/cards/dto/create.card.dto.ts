import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { CardTypes } from "../utils/constants";
import { IAddCard, CardLink } from "../utils/types";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCardDto {
  @IsNotEmpty()
  @IsEnum(CardTypes)
  @ApiProperty({ enum: CardTypes })
  type: CardTypes;

  @IsNotEmpty()
  @IsObject()
  background: IAddCard["background"];

  @IsNotEmpty()
  @IsObject()
  nameConfig: IAddCard["nameConfig"];

  @IsNotEmpty()
  @IsObject()
  logoConfig: IAddCard["logoConfig"];

  @IsNotEmpty()
  @IsObject()
  addressConfig: IAddCard["addressConfig"];

  @IsNotEmpty()
  @IsString()
  details: IAddCard["details"];

  @IsNotEmpty()
  @IsObject()
  detailsConfig: IAddCard["detailsConfig"];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Type(() => CardLink)
  links: CardLink;

  @IsOptional()
  enabled: IAddCard["enabled"];

  @IsNotEmpty()
  @IsString()
  userId: ["userId"];
}
