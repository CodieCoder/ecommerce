import { ICreateCard } from "../../types/business/card";
import { ICloudFile } from "../../types/cloudFile.type";

interface IProps {
  shopName: string;
  address: string;
  details: string;
  branchId?: string;
  businessId?: string;
  logo?: ICloudFile;
}

const AddCardToBusiness = ({
  shopName,
  address,
  details,
  branchId,
  businessId,
  logo,
}: IProps) => {
  const dataToAdd: ICreateCard = {
    businessId,
    branchId,
    shopName,
    address,
    details,
    backgroundColor: "rgb(0, 0, 0)",

    backgroundOverlay: "rgba(0,0,0, 0.5)",
    nameConfig: {
      isBold: false,
      color: "rgb(255, 255, 255)",
    },
    logoConfig: {
      rounded: 100,
      size: 6,
      opacity: 1,
      borderType: "solid",
      borderWidth: 3,
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    detailsConfig: {
      color: "rgb(255, 255, 255)",
      opacity: 0.25,
      borderWidth: 0,
    },
    addressConfig: {
      color: "rgb(255, 255, 255)",
      opacity: 0.25,
      borderWidth: 0,
      hide: true,
    },
    logo: logo ?? null,
  };

  return dataToAdd;
};

export default AddCardToBusiness;
