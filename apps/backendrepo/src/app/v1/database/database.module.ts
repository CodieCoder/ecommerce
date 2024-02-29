import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import configurations from "../config/db.config";
import { User } from "../users/entities/user.entity";
import { BusinessCard } from "../business/entities/business-card.entity";
import { Business } from "../business/entities/business.entity";
import { BusinessLocation } from "../business/entities/business-location.entity";
import { BusinessBranch } from "../business/entities/business-branch.entity";
import { Admin } from "../admin/entities/admin-entity";
import { AdminType } from "../admin/entities/type-admin.entity";
import { BusinessCategory } from "../business/entities/business-category.entity";
import { BusinessToCategory } from "../business/entities/business-to-category";
import { Telephone } from "../business/entities/telephone.entity";
import { BusinessPosition } from "../business/entities/business-position.entity";

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
        // entities: [__dirname + '/../**/*.entity.ts'],
        entities: [
          User,
          BusinessCard,
          Business,
          BusinessCategory,
          BusinessToCategory,
          Admin,
          AdminType,
          BusinessLocation,
          Telephone,
          BusinessBranch,
          BusinessPosition,
        ],
        database: "appdb",
        synchronize: true,
        // logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
