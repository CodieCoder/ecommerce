import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";
import {
  FileSystemStoredFile,
  HasMimeType,
  IsFile,
  MaxFileSize,
} from "nestjs-form-data";
import { UpdateCardDto } from "./update-business-card.dto";

export class CardFormDataDto {
  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(["image/jpeg", "image/png"])
  @IsOptional()
  logo: FileSystemStoredFile;

  @IsOptional()
  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(["image/jpeg", "image/png"])
  @IsOptional()
  backgroundImage: FileSystemStoredFile;

  @IsNotEmpty()
  @Transform((data) => JSON.parse(data.value), { toClassOnly: true })
  @Type(() => UpdateCardDto)
  details: UpdateCardDto;
}
