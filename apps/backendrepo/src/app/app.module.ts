import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./v1/config/db.config";
import { DatabaseModule } from "./v1/database/database.module";
import { CardModule } from "./v1/cards/card.module";
import { UserModule } from "./v1/users/user.module";
import { AuthModule } from "./v1/users/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./v1/users/auth/guard/jwt.auth.guard";
import jwtConfig from "./v1/config/jwt.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".development.env",
      isGlobal: true,
      load: [databaseConfig, jwtConfig],
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
