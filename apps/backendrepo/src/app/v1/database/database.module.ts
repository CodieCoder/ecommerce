import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configurations from '../config/configuration';
import { User } from '../users/entities/user.entity';
import { Card } from '../cards/entities/card.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.development.env',
          isGlobal: true,
          load: [configurations],
        }),
      ],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<any>('database.type'),
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        password: configService.get<any>('database.password'),
        username: configService.get<any>('database.username'),
        // entities: [__dirname + '/../**/*.entity.ts'],
        entities: [User, Card],
        database: 'appdb',
        synchronize: true,
        // logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
