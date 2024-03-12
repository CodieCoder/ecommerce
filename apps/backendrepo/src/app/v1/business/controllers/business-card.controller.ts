import { Body, Controller, UseInterceptors } from "@nestjs/common";
import { BusinessCardService } from "../services/business-card.service";
import {
  Crud,
  CrudController,
  CrudRequest,
  JoinOptions,
  Override,
  ParsedRequest,
} from "@dataui/crud";
import { BusinessCard } from "../../entities/business-card.entity";
import { UpdateCardDto } from "../dto/update-business-card.dto";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../../users/interceptors/user.interceptor";
import { FileSystemStoredFile, FormDataRequest } from "nestjs-form-data";
import { CardFormDataDto } from "../dto/business-card-formData.dto";
import { appWriteStorage } from "../../lib/appwrite/storage";
import { randomUUID } from "crypto";
import { COMMON_URLS } from "../../constants/common";
import { ICloudFile } from "../../types/cloudFile.type";

@Crud({
  model: {
    type: BusinessCard,
  },
  dto: {
    update: CardFormDataDto,
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true,
    },
  },
  query: {
    join: {
      logo: {
        persist: ["id", "url"],
      },
      backgroundImage: {
        persist: ["id", "url"],
      },
    },
  },
  routes: {
    only: ["updateOneBase", "getManyBase", "getOneBase"],
    updateOneBase: {
      // allowParamsOverride: true,
    },
  },
})
@ApiTags("Cards")
@UseInterceptors(UserInterceptor)
@Controller({
  path: "card",
  version: "1",
})
export class BusinessCardController implements CrudController<BusinessCard> {
  constructor(public service: BusinessCardService) {}

  get base(): CrudController<BusinessCard> {
    return this;
  }

  @Override("updateOneBase")
  @FormDataRequest({ storage: FileSystemStoredFile })
  async saveCard(
    @ParsedRequest() req: CrudRequest<UpdateCardDto>,
    @Body() formData: CardFormDataDto
  ) {
    const { details, logo, backgroundImage } = formData;

    const dataToAdd: UpdateCardDto = {
      ...details,
      logo: null,
      backgroundImage: null,
    };

    // Get card with same branchID
    const card = await this.service.findOne({
      where: { branchId: details.branchId },
    });
    const logoId = `logo-${details.branchId.substring(0, 25)}`; // get id from branchId
    const imageId = `bgImg-${details.branchId.substring(0, 25)}`; // get id from branchId
    const cardLogoId = card.logo?.id;
    const cardBackgroundImageId = card.backgroundImage?.id;

    if (logo || backgroundImage) {
      //add logo and/or background image to cloud and add their file ID to db
      //using appWrite sdk and cloud

      const imageCloud = appWriteStorage(); //init the sdk
      if (logo) {
        //if logo file is available
        //Delete logo if it exist
        await imageCloud.deleteFile(logoId);
        //add to cloud
        const addLogo = await imageCloud.addFile(
          logoId,
          logo.path,
          `card-logo`
        );
        if (addLogo.chunksTotal) {
          //if successful
          //add the CloudEntity
          const logo: ICloudFile = {
            id: logoId,
            name: addLogo.name,
            description: "Business card logo",
            fileId: addLogo.$id,
            mimeType: addLogo.mimeType,
            url: `${COMMON_URLS.file}${addLogo.$id}`,
            sizeOriginal: addLogo.sizeOriginal,
            bucketId: addLogo.bucketId,
            signature: addLogo.signature,
          };

          dataToAdd.logo = logo;
        }
      }

      if (backgroundImage) {
        //if logo file is available
        //Delete backgroundImage if it exist
        await imageCloud.deleteFile(imageId);
        //add to cloud
        const addBackgroundImage = await imageCloud.addFile(
          imageId,
          backgroundImage.path,
          `card-backgroundImage`
        );
        if (addBackgroundImage.chunksTotal) {
          //if successful
          //add the CloudEntity
          const backgroundImage: ICloudFile = {
            id: imageId,
            name: addBackgroundImage.name,
            description: "Business card background image",
            fileId: addBackgroundImage.$id,
            mimeType: addBackgroundImage.mimeType,
            url: `${COMMON_URLS.file}${addBackgroundImage.$id}`,
            sizeOriginal: addBackgroundImage.sizeOriginal,
            bucketId: addBackgroundImage.bucketId,
            signature: addBackgroundImage.signature,
          };

          dataToAdd.backgroundImage = backgroundImage;
        }
      }
    }
    console.log("Testee dataToAdd : ", dataToAdd);
    const result = await this.service.updateOne(req, dataToAdd as any);
    return "result";
  }
}
