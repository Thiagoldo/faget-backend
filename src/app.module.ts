import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerceirizadosModule } from './terceirizados/terceirizados.module';

@Module({
  imports: [TerceirizadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
