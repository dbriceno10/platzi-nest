import { Controller, Get, Param, Query } from '@nestjs/common';
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

  //para evitar choques de rutas, debemos hacer que todas las rutas que no sean dinamicas vayan de primeras...
  @Get('products/filter')
  getProductFilter() {
    return `soy un filtro`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset = 0, //si le pasamos un parametro por defecto, usamos tipado inferido
    @Query('brand') brand: string,
  ) {
    return `products limit: ${limit} offset: ${offset} brand: ${brand}`;
  }

  @Get('categories/:id/:producs/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} product ${productId}`;
  }
}
