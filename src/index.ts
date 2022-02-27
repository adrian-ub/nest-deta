/**
 * View blog post for more information: https://adrianub.dev/blog/desplegar-nestjs-en-deta.sh
 */

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

export default createNestServer;
