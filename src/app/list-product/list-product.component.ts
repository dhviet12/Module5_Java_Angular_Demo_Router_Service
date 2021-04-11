import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interface/iproduct';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: IProduct[] = [];

  constructor( private productService: ProductService) { 
    this.getAllProduct();
  }

  ngOnInit(): void {
  }

  getAllProduct(){
    this.products = this.productService.getAllProduct();
  }

}
