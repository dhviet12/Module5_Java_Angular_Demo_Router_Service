import { Injectable } from '@angular/core';
import { IProduct } from '../interface/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: IProduct[] = [
    {
      id:1,
      name: 'SP1',
      description: 'Mo ta SP1'
    },
    {
      id: 2,
      name: 'SP2',
      description: 'Mo ta SP2'
    },
    {
      id: 3,
      name: 'SP3',
      description: 'Mo ta SP3'
    }
  ]

  getAllProduct(): IProduct[] {
    return this.products
  }

  getProductById(id: number){
    return this.products[id-1];
  }

  editProduct(id: number, p: IProduct){
    this.products[id-1]= p;
  }
  
  createProduct(p: IProduct){
    p.id = this.products.length+1;
    this.products.push(p);
  }

  deleteProduct(id: number) {
    this.products.splice(id-1,1);
  }

  constructor() { }
}
