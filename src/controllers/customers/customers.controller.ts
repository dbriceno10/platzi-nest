import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  list() {
    return {
      message: 'list costumers',
    };
  }
}
