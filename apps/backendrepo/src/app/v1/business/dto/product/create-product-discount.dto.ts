import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";
import { ProductDiscountExist } from "../../../validations/product/product-discountNameExist.validation";

export class CreateProductDiscountDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @Validate(ProductDiscountExist)
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
  percent: Number;
}
