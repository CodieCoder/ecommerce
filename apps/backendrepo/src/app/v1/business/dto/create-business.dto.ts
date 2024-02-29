import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  Validate,
} from "class-validator";
import { BusinessNameExist } from "../../validations/business/businessNameExist";
import {
  IAddAdminPrivilegesForm,
  IAdminCreate,
} from "../../types/business/admin";
import { ICreateCard } from "../../types/business/card";
import { ICreateBusinessBranch } from "../../types/business";

export class CreateBusinessDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @Validate(BusinessNameExist)
  name: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsUUID() //TODO : extract bearer token from request and validate user with it.
  userId: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  logo: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsArray()
  branches: ICreateBusinessBranch[];

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsArray()
  categories?: string[];

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsArray()
  admins: IAdminCreate[];
}
