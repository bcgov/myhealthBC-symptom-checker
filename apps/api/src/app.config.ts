import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import express from 'express';

import { AppModule } from './app.module';
import { API_PREFIX } from './config';

export async function createNestApp(): Promise<{
  app: NestExpressApplication;
  expressApp: express.Application;
}> {
  // Express app
  const expressApp = express();
  expressApp.disable('x-powered-by');

  // Nest Application With Express Adapter
  let app: NestExpressApplication;
  if (process.env.RUNTIME_ENV === 'local') {
    app = await NestFactory.create(AppModule);
  } else {
    app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      new ExpressAdapter(expressApp),
    );
  }

  // Api prefix api/v1/
  app.setGlobalPrefix(API_PREFIX);

  return {
    app,
    expressApp,
  };
}
