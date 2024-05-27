import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTerceirizadoDto {
  @IsString()
  @IsNotEmpty()
  private cpf: string;

  @IsString()
  @IsNotEmpty()
  private nome: string;
}
