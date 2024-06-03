import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  nome_fantasia: string;

  @IsString()
  @IsNotEmpty()
  razao_social: string;

  constructor(partial: Partial<CreateEmpresaDto>) {
    Object.assign(this, partial);
  }
}
