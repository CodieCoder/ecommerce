import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductSubCategoryDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  categoryId: string;
}
