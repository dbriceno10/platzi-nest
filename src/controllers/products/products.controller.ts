import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  //para evitar choques de rutas, debemos hacer que todas las rutas que no sean dinamicas vayan de primeras...
  @Get('filter')
  getProductFilter(@Res() response: Response) { //De ser necesario podemos acceder al request y response normalmente de express para trabajar con ellos en caso de que sea necesario, por ejemplo podria ser util al momento de trabajar con un access token
    return response.status(200).send({ message: `soy un filtro` });
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED) //Podemos customizar el http code segun lo que se necesite...
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
