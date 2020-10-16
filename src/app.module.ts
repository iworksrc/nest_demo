import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiModule } from './modules/si/si.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [SiModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
