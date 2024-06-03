import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { PrismaClientModule } from '@app/prisma-client';

@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService],
  imports: [PrismaClientModule],
})
export class EmpresasModule { }
