import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../interface/iproduct';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  subcription: Subscription;
  product: IProduct ={
    id: 0,
    name: '',
    description: ''
  }
  id: number = 0;



  constructor(private productService: ProductService , private router: Router, private activeRouter: ActivatedRoute) {
    this.subcription = this.activeRouter.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      this.product = this.productService.getProductById(this.id);
    })
   }

  ngOnInit(): void {
  }

  
  
  editProduct(){
    this.productService.editProduct(this.id,this.product);
    this.router.navigate(['/']);
  }

}
