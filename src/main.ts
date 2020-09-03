import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import * as fs from 'fs';

const httpsOptions = {
  key: fs.readFileSync('src/secrets/key.pem'),
  cert: fs.readFileSync('src/secrets/cert.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    httpsOptions,
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const options = new DocumentBuilder()
    .setTitle('Monteurs Application')
    .setDescription('The Monteurs API description')
    .setVersion('1.0')
    .addTag('Nozzles')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('SERVER_PORT'));
  
  const appUrl = await app.getUrl();
  console.log(`Application is running at ${appUrl}`);
}
bootstrap();
