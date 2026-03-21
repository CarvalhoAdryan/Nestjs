import { IsNumber, Min } from 'class-validator';

export class criarProdutoDto {
  nome: string;

  @IsNumber()
  preco: number;

  @IsNumber()
  @Min(0)
  quantidade: number;
}
