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

  /*  update(payload: Product) {
    const index = this.products.findIndex((item) => item.id === payload.id);
    this.products[index] = payload;
    return payload;
  } */

  update(id: number, payload: any) {
    const product = this.findOne(id);
    console.log(product);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    } else {
      return { message: 'no se encontro el producto' };
    }
  }

  /* delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    const product = this.products[index];
    this.products = this.products.splice(index, 1);
    return product;
  } */

  delete(id: number) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products.splice(index, 1);
      return product;
    } else {
      return { message: 'no se encontro el producto' };
    }
  }
}
