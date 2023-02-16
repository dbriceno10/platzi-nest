import { Injectable, NotFoundException } from '@nestjs/common';
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
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
    return product;
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

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = { ...product, ...payload };
      return this.products[index];
    } else {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    }
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Producto ${id} no encontrado`);
    } else {
      this.products.splice(index, 1);
      return { message: `Producto ${id} eliminado` };
    }
  }
}
