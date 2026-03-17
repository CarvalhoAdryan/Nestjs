import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { criarProdutoDto } from './dto/criar-produto.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('produtos')
  async criarProduto(@Body() body: criarProdutoDto) {
    return this.appService.criarProduto(body);
  }
}
