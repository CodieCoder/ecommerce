import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Validate,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import {
  IBackground,
  IShopAddressBackground,
  IShopLogo,
  IShopNameConfig,
} from "../../types/business/card";

export class UpdateCardDto {
  @ApiProperty()
  @IsNotEmpty()
  // @IsObject()
  background: IBackground;

  @ApiProperty()
  @IsOptional()
  @IsString()
  backgroundOverlay: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  nameConfig: IShopNameConfig;

  @ApiProperty()
  @IsOptional()
  @IsString()
  logo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  logoConfig: IShopLogo;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  details: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  detailsConfig: IShopAddressBackground;

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  addressConfig: IShopAddressBackground;

  @ApiProperty()
  @IsOptional()
  @IsString()
  qrCodeBackground: string;
}
