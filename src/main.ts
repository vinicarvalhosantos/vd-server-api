import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { LogService } from './logger/log.service';
import { ConfigurationService } from './config/configuration.service';

const pckg = require('../package.json');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  const configuration = app.get(ConfigurationService);

  app.use(helmet());

  app.use(compression());

  app.useGlobalFilters(new HttpExceptionFilter(app.get(LogService)));

  app.useLogger(app.get(LogService));

  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle(pckg.name)
    .setDescription(pckg.description)
    .setVersion(pckg.version)
    .addTag('users', 'Configuração dos clientes')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(configuration.port);
}
bootstrap();