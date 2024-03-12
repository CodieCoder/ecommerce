import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Validate,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import {
  IShopAddressBackground,
  IShopLogo,
  IShopNameConfig,
} from "../../types/business/card";
import { ICloudFile } from "../../types/cloudFile.type";

export class UpdateCardDto {
  @ApiProperty()
  @IsNotEmpty()
  backgroundColor: string;

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
  @IsObject()
  logo: ICloudFile;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  backgroundImage: ICloudFile;

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

  @ApiProperty()
  @IsNotEmpty()
  branchId: string;
}
