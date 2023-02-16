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
  ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/services/products/products.service';
import { ParseIntPipe as ParseIntPipeCustom } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
  //trabajando con inyeccion de dependencias...
  constructor(private productsService: ProductsService) {}
  //para evitar choques de rutas, debemos hacer que todas las rutas que no sean dinamicas vayan de primeras...
  @Get('filter')
  getProductFilter(@Res() response: Response) {
    //De ser necesario podemos acceder al request y response normalmente de express para trabajar con ellos en caso de que sea necesario, por ejemplo podria ser util al momento de trabajar con un access token
    return response.status(200).send({ message: `soy un filtro` });
  }

  @Get(':id')
  // @HttpCode(HttpStatus.ACCEPTED) //Podemos customizar el http code segun lo que se necesite...
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Get('')
  getProducts() // @Query('limit') limit: number,
  // @Query('offset') offset = 0, //si le pasamos un parametro por defecto, usamos tipado inferido
  // @Query('brand') brand: string,
  {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipeCustom) id: number) {
    return this.productsService.delete(id);
  }
}
