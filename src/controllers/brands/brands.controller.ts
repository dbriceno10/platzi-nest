import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  list() {
    return { message: 'list brands' };
  }
}
