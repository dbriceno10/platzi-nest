import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //para evitar choques de rutas, debemos hacer que todas las rutas que no sean dinamicas vayan de primeras...
  @Get('filter')
  getProductFilter() {
    return `soy un filtro`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset = 0, //si le pasamos un parametro por defecto, usamos tipado inferido
    @Query('brand') brand: string,
  ) {
    return `products limit: ${limit} offset: ${offset} brand: ${brand}`;
  }
}
