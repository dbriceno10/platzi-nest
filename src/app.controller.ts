import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Hola mundo';
  }

  //manejo de rutas simples, no nos debemos preocupar por poner el '/'

  @Get('new')
  newEndpoint() {
    return 'I`m new endpoint';
  }

  @Get('hello/world')
  hello() {
    return 'Hello Moto!';
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('categories/:id/:producs/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} product ${productId}`;
  }
}
