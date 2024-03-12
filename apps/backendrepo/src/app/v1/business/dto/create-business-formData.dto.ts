import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";
import {
  FileSystemStoredFile,
  HasMimeType,
  IsFile,
  MaxFileSize,
} from "nestjs-form-data";
import { CreateBusinessDto } from "./create-business.dto";

export class BusinessFormDataDto {
  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(["image/jpeg", "image/png"])
  @IsOptional()
  logo: FileSystemStoredFile;

  @IsNotEmpty()
  @Transform((data) => JSON.parse(data.value), { toClassOnly: true })
  @Type(() => CreateBusinessDto)
  details: CreateBusinessDto;
}
