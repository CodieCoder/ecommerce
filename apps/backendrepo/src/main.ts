import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { useContainer } from "class-validator";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalInterceptors(app.get(Reflector));

  app.setGlobalPrefix("api");
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle("Api Documentation")
    .setDescription("Api documentation description")
    .setVersion("1.0")
    .addTag("AppBackend")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("v1/api/docs/", app, document);

  await app.listen(4000);
}
bootstrap();
