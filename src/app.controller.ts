import { Body, Controller, Get, Post, Put, Param, Patch, Delete } from '@nestjs/common';
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

  @Get('produtos/:id')
  mostrarProduto(@Param('id') id: string) {
    return this.appService.mostrarProduto(Number(id));
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

  @Patch('produtos/:id')
  async atualizarParcial(
    @Param('id') id: string,
    @Body() body: atualizarProdutoDto,
  ) {
    return this.appService.atualizarProduto(Number(id), body);
  }

  @Patch('produtos/:id/venda')
  async venderProduto(
    @Param('id') id: string,
    @Body() body: { valor: number },
  ) {
    return this.appService.venderProduto(Number(id), body.valor);
  }

  @Delete('produtos/:id')
  async deleteProduto(@Param('id') id: string) {
    return this.appService.deleteProduto(Number(id));
  }

  @Patch('produtos/:id/compra')
  async comprarProduto(
    @Param('id') id: string,
    @Body() body: { valor: number },
  ) {
    return this.appService.comprarProduto(Number(id), body.valor);
  }
}
