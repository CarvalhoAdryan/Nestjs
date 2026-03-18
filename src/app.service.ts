import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { criarProdutoDto } from './dto/criar-produto.dto';
import { atualizarProdutoDto } from './dto/atualiza-produto.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Adryan Lindo';
  }

  async criarProduto(data: criarProdutoDto) {
    return this.prisma.produto.create({
      data,
    });
  }

  async atualizarProduto(id: number, data: atualizarProdutoDto) {
    return this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  async mostrarProdutos() {
    return this.prisma.produto.findMany();
  }
}
