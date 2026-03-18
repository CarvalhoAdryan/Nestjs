import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { criarProdutoDto } from './dto/criar-produto.dto';
import { atualizarProdutoDto } from './dto/atualiza-produto.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('produtos')
  getHello() {
    return this.appService.mostrarProdutos();
  }

  @Post('produtos')
  async criarProduto(@Body() body: criarProdutoDto) {
    return this.appService.criarProduto(body);
  }

  @Put('produtos/:id')
  async atualizarProduto(
    @Param('id') id: string,
    @Body() body: atualizarProdutoDto,
  ) {
    return this.appService.atualizarProduto(Number(id), body);
  }
}
