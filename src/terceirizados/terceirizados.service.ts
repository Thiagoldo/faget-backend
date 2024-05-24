import { Injectable } from '@nestjs/common';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';
import { PrismaClientService } from '@app/prisma-client';

@Injectable()
export class TerceirizadosService {
  constructor(private prisma: PrismaClientService) { }
  create(createTerceirizadoDto: CreateTerceirizadoDto) {
    return 'This action adds a new terceirizado';
  }

  findAll(offset?: number) {
    return this.prisma.terceirizados.findMany({
      skip: offset || 0,
      take: 10,
      orderBy: { nome: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.terceirizados.findUnique({
      where: { id_terceirizado: id },
    });
  }

  update(id: number, updateTerceirizadoDto: UpdateTerceirizadoDto) {
    return `This action updates a #${id} terceirizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} terceirizado`;
  }
}
