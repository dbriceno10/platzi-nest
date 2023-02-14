import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/:producs/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `category ${id} product ${productId}`;
  }
}
