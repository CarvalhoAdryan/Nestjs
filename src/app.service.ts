import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { criarProdutoDto } from './dto/criar-produto.dto';

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
}
