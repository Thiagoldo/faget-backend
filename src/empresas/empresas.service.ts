import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaClientService } from '@app/prisma-client';

@Injectable()
export class EmpresasService {
  constructor(private prisma: PrismaClientService) { }
  async create(createEmpresaDto: CreateEmpresaDto) {
    return await this.prisma.empresas.create({
      data: createEmpresaDto,
    });
  }

  async findAll(itemsPerPage: number, page: number, nome?: string) {
    const offset = itemsPerPage * (page - 1);
    const count = await this.prisma.empresas.count({
      ...(nome && {
        where: { nome_fantasia: { contains: nome, mode: 'insensitive' } },
      }),
    });
    if (offset >= count) {
      return { content: [], count: 0 };
    }
    const content = await this.prisma.empresas.findMany({
      ...(nome && {
        where: { nome_fantasia: { contains: nome, mode: 'insensitive' } },
      }),
      skip: offset,
      take: itemsPerPage > 0 ? itemsPerPage : count,
      orderBy: { nome_fantasia: 'asc' },
    });
    return { content: content, count: count };
  }

  findOne(id: number) {
    return this.prisma.empresas.findUnique({
      where: { id_empresa: id },
    });
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return this.prisma.empresas.update({
      where: { id_empresa: id },
      data: updateEmpresaDto,
    });
  }

  remove(id: number) {
    return this.prisma.empresas.delete({ where: { id_empresa: id } });
  }
}
