import { PartialType } from '@nestjs/mapped-types';
import { CreateTerceirizadoDto } from './create-terceirizado.dto';

export class UpdateTerceirizadoDto extends PartialType(CreateTerceirizadoDto) {}
