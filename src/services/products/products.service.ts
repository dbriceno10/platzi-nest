import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product/entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 1200,
      stock: 12,
      image: '',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description ',
      price: 1300,
      stock: 12,
      image: '',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 1400,
      stock: 12,
      image: '',
    },
  ];
  private counterId = this.products.length;

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
