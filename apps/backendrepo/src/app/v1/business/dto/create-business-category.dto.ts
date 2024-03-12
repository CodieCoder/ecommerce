import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";
import { BusinessCategoryExist } from "../../validations/business/businessCategoryExist.validation";

export class CreateBusinessCategoryDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @Validate(BusinessCategoryExist)
  name: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  description: string;
}
