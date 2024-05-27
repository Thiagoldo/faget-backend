import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';
import { PrismaClientService } from '@app/prisma-client';

@Injectable()
export class TerceirizadosService {
  constructor(private prisma: PrismaClientService) { }
  create(createTerceirizadoDto: CreateTerceirizadoDto) {
    return 'This action adds a new terceirizado';
  }

  async findAll(itemsPerPage: number, page: number, nome?: string) {
    const offset = itemsPerPage * (page - 1);
    const count = await this.prisma.terceirizados.count({
      ...(nome && { where: { nome: { contains: nome, mode: 'insensitive' } } }),
    });
    if (offset >= count) {
      return new BadRequestException('Invalid pagination.');
    }
    const content = await this.prisma.terceirizados.findMany({
      ...(nome && { where: { nome: { contains: nome, mode: 'insensitive' } } }),
      skip: offset,
      take: itemsPerPage > 0 ? itemsPerPage : count,
      orderBy: { nome: 'asc' },
    });
    return { content: content, count: count };
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
