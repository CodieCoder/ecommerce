import { ICloudFile } from "../cloudFile.type";

export interface IShopNameConfig {
  isBold?: boolean;
  color?: string;
}

export type IShopLogo = {
  rounded?: number;
  size?: number;
  opacity?: number;
  borderType?: "dotted" | "solid";
  borderWidth?: number;
  borderColor?: string;
};

export interface IShopAddressBackground {
  color?: string | undefined;
  opacity?: number;
  borderWidth?: number;
  hide?: boolean;
}

export interface ICreateCard {
  backgroundColor: string;
  backgroundImage?: ICloudFile;
  backgroundOverlay: string | undefined;
  shopName: string | undefined;
  nameConfig: IShopNameConfig;
  logo?: ICloudFile;
  logoConfig: IShopLogo;
  details: string;
  detailsConfig: IShopAddressBackground;
  address: string | undefined;
  addressConfig: IShopAddressBackground;
  qrCodeBackground?: string | undefined;
  businessId?: string;
  branchId?: string;
}
