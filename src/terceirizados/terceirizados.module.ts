import { Module } from '@nestjs/common';
import { TerceirizadosService } from './terceirizados.service';
import { TerceirizadosController } from './terceirizados.controller';
import { PrismaClientModule, PrismaClientService } from '@app/prisma-client';

@Module({
  controllers: [TerceirizadosController],
  providers: [TerceirizadosService, PrismaClientService],
  imports: [PrismaClientModule],
})
export class TerceirizadosModule { }
