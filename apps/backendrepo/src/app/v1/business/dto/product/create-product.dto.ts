import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";
import { ProductInventory } from "../../../entities/product-inventory.entity";

export class CreateProductDto {
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
    type: Number,
  })
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    required: true,
    type: ProductInventory,
  })
  @IsNotEmpty()
  inventory: {
    quantity: number;
  };

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  brandId: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  subCategoryId: string;
}
