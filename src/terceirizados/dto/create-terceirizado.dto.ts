import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateTerceirizadoDto {
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDate()
  @Type(() => Date)
  data_nascimento: Date;

  constructor(partial: Partial<CreateTerceirizadoDto>) {
    Object.assign(this, partial);
  }
}
