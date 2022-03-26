import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('slimblog api')
    .setDescription('The blog API description')
    .setVersion('1.0')
    .addTag('slimblog')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000); console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
