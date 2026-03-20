import { IsNumber, Min } from 'class-validator';

export class atualizarProdutoDto {
  nome?: string;
  preco?: number;

  @IsNumber()
  @Min(0)
  quantidade?: number;
}
