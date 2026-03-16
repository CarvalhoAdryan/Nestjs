import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Adryan Lindo';
  }

  async criarProduto(data){
    return this.prisma.produto.create({
      data: {
        nome: data.nome,
        preco: data.preco,
        quantidade: data.quantidade
      }
    })
  }
}
