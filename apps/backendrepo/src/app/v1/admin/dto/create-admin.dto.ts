import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsOptional()
  description: string;

  @IsNotEmpty()
  typeId: string;

  @IsNotEmpty()
  businessId: string;

  @IsNotEmpty()
  userId: string;
}
