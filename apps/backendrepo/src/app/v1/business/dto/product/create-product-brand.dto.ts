import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateProductBrandDto {
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
    required: false,
    type: String,
  })
  @IsOptional()
  logo: string;
}
