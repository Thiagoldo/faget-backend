import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TerceirizadosService } from './terceirizados.service';
import { CreateTerceirizadoDto } from './dto/create-terceirizado.dto';
import { UpdateTerceirizadoDto } from './dto/update-terceirizado.dto';

@Controller('terceirizados')
export class TerceirizadosController {
  constructor(private readonly terceirizadosService: TerceirizadosService) { }

  @Post()
  create(@Body() createTerceirizadoDto: CreateTerceirizadoDto) {
    return this.terceirizadosService.create(createTerceirizadoDto);
  }

  @Get()
  findAll(@Query('offset') offset?: number) {
    return this.terceirizadosService.findAll(+offset);
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
