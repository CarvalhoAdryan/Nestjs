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

  async comprarProduto(id: number, valor: number) {
    return this.prisma.produto.update({
      where: { id },
      data: {
        quantidade: { increment: valor },
      },
    });
  }

  async venderProduto(id: number, valor: number) {
    const produto = await this.prisma.produto.findUnique({
      where: { id },
    });

    if (!produto || produto.quantidade < valor) {
      throw new Error('Quantidade insuficiente');
    }

    return this.prisma.produto.update({
      where: { id },
      data: {
        quantidade: { decrement: valor },
      },
    });
  }
}
