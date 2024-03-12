import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import configurations from "../config/db.config";
import { User } from "../entities/user.entity";
import { BusinessCard } from "../entities/business-card.entity";
import { Business } from "../entities/business.entity";
import { BusinessLocation } from "../entities/business-location.entity";
import { BusinessBranch } from "../entities/business-branch.entity";
import { Admin } from "../entities/admin-entity";
import { AdminType } from "../entities/type-admin.entity";
import { BusinessCategory } from "../entities/business-category.entity";
import { BusinessToCategory } from "../entities/business-to-category";
import { Telephone } from "../entities/telephone.entity";
import { BusinessPosition } from "../entities/business-position.entity";
import { Product } from "../entities/product.entity";
import { ProductSubCategory } from "../entities/product-subCategory.entity";
import { ProductBrand } from "../entities/product-brand.entity";
import { ProductDiscount } from "../entities/product-discount.entity";
import { ProductInventory } from "../entities/product-inventory.entity";
import { BrandToCategory } from "../entities/brand-to-category.entity";
import { BrandToSubCategory } from "../entities/brand-to-subCategory.entity";
import { CloudFiles } from "../entities/cloud-files.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ".development.env",
          isGlobal: true,
          load: [configurations],
        }),
      ],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<any>("database.type"),
        host: configService.get<string>("database.host"),
        port: configService.get<number>("database.port"),
        password: configService.get<any>("database.password"),
        username: configService.get<any>("database.username"),
        // entities: [join(__dirname, "**", "*.entity.{ts,js}")],
        entities: [
          User,
          BusinessCard,
          Business,
          BusinessCategory,
          Admin,
          AdminType,
          BusinessLocation,
          Telephone,
          BusinessBranch,
          BusinessPosition,
          Product,
          ProductSubCategory,
          ProductBrand,
          ProductDiscount,
          ProductInventory,
          BusinessToCategory,
          BrandToCategory,
          BrandToSubCategory,
          CloudFiles,
        ],
        database: "appdb",
        synchronize: true,
        // logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
