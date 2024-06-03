import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerceirizadosModule } from './terceirizados/terceirizados.module';
import { EmpresasModule } from './empresas/empresas.module';

@Module({
  imports: [TerceirizadosModule, EmpresasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
