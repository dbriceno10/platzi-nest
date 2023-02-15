import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //para evitar choques de rutas, debemos hacer que todas las rutas que no sean dinamicas vayan de primeras...
  @Get('filter')
  getProductFilter() {
    return { message: `soy un filtro` };
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return { message: `product ${id}` };
  }

  @Get('')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset = 0, //si le pasamos un parametro por defecto, usamos tipado inferido
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit: ${limit} offset: ${offset} brand: ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Accion para crear',
      payload,
    };
  }

  /* @Post()
  create(@Body('name') name: string, @Body('price') price: number) {
    return {
      message: 'Accion para crear',
      payload: {
        name,
        price,
      },
    };
  } */

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `El producto con el id ${id} se ha eliminado`,
    };
  }
}
