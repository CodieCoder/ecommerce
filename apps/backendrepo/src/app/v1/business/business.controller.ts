import {
  BadRequestException,
  Body,
  Controller,
  UseInterceptors,
} from "@nestjs/common";
import {
  Crud,
  CrudAuth,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
} from "@dataui/crud";
import { ApiTags } from "@nestjs/swagger";
import { UserInterceptor } from "../users/interceptors/user.interceptor";
import { CreateBusinessDto } from "./dto/create-business.dto";
import { Business } from "../entities/business.entity";
import { BusinessService } from "./business.service";
import { FileSystemStoredFile, FormDataRequest } from "nestjs-form-data";
import { BusinessFormDataDto } from "./dto/create-business-formData.dto";
import { appWriteStorage } from "../lib/appwrite/storage";
import { randomUUID } from "crypto";
import { ICloudFile } from "../types/cloudFile.type";
import { COMMON_URLS } from "../constants/common";
import { IAdminCreate } from "../types/business/admin";
import { IJwtAuth } from "../auth";

@Crud({
  model: {
    type: Business,
  },
  dto: {
    create: CreateBusinessDto,
  },
  query: {
    join: {
      branches: {
        persist: ["id"],
      },
      "branches.location": {
        persist: ["id"],
      },
      "branches.card": {
        persist: ["id"],
      },
      logo: {
        persist: ["id", "url"],
      },
    },
  },
})
@ApiTags("Business")
@UseInterceptors(UserInterceptor)
@CrudAuth({
  property: "user",
  filter: (user) => ({ userId: user.userId }),
})
@Controller({
  path: "business",
  version: "1",
})
export class BusinessController implements CrudController<Business> {
  constructor(public service: BusinessService) {}

  get base(): CrudController<Business> {
    return this;
  }

  @Override("createOneBase")
  @FormDataRequest({ storage: FileSystemStoredFile })
  async addBusiness(
    @ParsedRequest() req: CrudRequest<IJwtAuth>,
    @Body() formData: BusinessFormDataDto
  ) {
    const { details, logo } = formData;

    const admins = this.addAdmin(req, details);

    const dataToAdd: CreateBusinessDto = {
      ...details,
      admins,
      userId: req.auth.userId,
      logo: null,
    };
    if (logo) {
      const imageCloud = appWriteStorage(); //init the sdk
      //if logo file is available
      const logoId = randomUUID(); // create random ID for logo
      //add to cloud
      const addLogo = await imageCloud.addFile(
        logoId,
        logo.path,
        `business-${details.name}-logo`
      );
      if (addLogo.chunksTotal) {
        //if successful
        //add the CloudEntity
        const logo: ICloudFile = {
          id: logoId,
          name: addLogo.name,
          description: `${addLogo.name} Business logo`,
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

    return this.base.createOneBase(req, dataToAdd as any);
  }

  addAdmin(req: CrudRequest<IJwtAuth>, details: CreateBusinessDto) {
    const admins: IAdminCreate[] = details.admins;
    if (admins?.length) {
      const newAdmins: IAdminCreate[] = admins.map((admin) => ({
        ...admin,
        userId: req.auth.userId,
      }));

      //return new admins
      return newAdmins;
    } else {
      throw new BadRequestException("Admin not found");
    }
  }
}
