import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configurations from './v1/config/configuration';
import { DatabaseModule } from './v1/database/database.module';
import { CardModule } from './v1/cards/card.module';
import { UserModule } from './v1/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      load: [configurations],
    }),
    DatabaseModule,
    UserModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
