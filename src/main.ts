import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API docs')
    .setDescription('The demo order system API description')
    .addTag('product')
    .addTag('cart')
    .addTag('order')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(cors({
    origin: 'http://localhost:3000',
  }));
  await app.listen(3001);
}
bootstrap();
