import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlCodeController } from './controller/html-code/html-code.controller';
import { TelegramService } from './services/telegram/telegram.service';

@Module({
  imports: [],
  controllers: [AppController, HtmlCodeController],
  providers: [AppService, TelegramService],
})
export class AppModule {}
