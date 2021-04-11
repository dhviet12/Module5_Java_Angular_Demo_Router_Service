import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../interface/iproduct';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: IProduct ={
    id: 0,
    name: '',
    description: ''
  }

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  createProduct(){
    this.productService.createProduct(this.product);
    this.router.navigate(['/']);
  }

}
