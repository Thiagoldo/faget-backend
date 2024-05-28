import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';
import { TerceirizadosService } from './terceirizados.service';

@Controller('terceirizados')
export class TerceirizadosController {
  constructor(private readonly terceirizadosService: TerceirizadosService) { }

  @Post()
  create(@Body() createTerceirizadoDto: CreateTerceirizadoDto) {
    return this.terceirizadosService.create(createTerceirizadoDto);
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

    return this.terceirizadosService.findAll(+itemsPerPage, +page, nome);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terceirizadosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTerceirizadoDto: UpdateTerceirizadoDto,
  ) {
    return this.terceirizadosService.update(+id, updateTerceirizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terceirizadosService.remove(+id);
  }
}
