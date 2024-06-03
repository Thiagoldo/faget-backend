import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) { }

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresasService.create(createEmpresaDto);
  }

  @Get()
  findAll(
    @Query('itemsPerPage') itemsPerPage: number,
    @Query('page') page: number,
    @Query('nome') nome: string,
  ) {
    if (!itemsPerPage || !page) {
      return new BadRequestException(
        'Items per page and page must be specified',
      );
    }

    return this.empresasService.findAll(+itemsPerPage, +page, nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresasService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresasService.remove(+id);
  }
}
