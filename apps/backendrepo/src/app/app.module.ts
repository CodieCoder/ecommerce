import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./v1/config/db.config";
import { DatabaseModule } from "./v1/database/database.module";
import { UserModule } from "./v1/users/user.module";
import { AuthModule } from "./v1/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./v1/auth/guard/jwt.auth.guard";
import jwtConfig from "./v1/config/jwt.config";
import { BusinessModule } from "./v1/business/business.module";
import { AdminModule } from "./v1/admin/admin.module";
import { NestjsFormDataModule } from "nestjs-form-data";
import { FormDataConfigService } from "./v1/lib/formData";
import { PublicFileDownloadController } from "./v1/public/file/file-download.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".development.env",
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    NestjsFormDataModule.configAsync({
      useClass: FormDataConfigService,
    }),
    DatabaseModule,
    UserModule,
    BusinessModule,
    AdminModule,
    AuthModule,
  ],
  controllers: [AppController, PublicFileDownloadController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
