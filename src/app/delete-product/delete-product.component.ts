import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  subcription: Subscription;
  id: number;

  constructor(private productService: ProductService, private router: Router, private activedRouter: ActivatedRoute) { 
    this.subcription= this.activedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id= +paramMap.get('id');
      this.productService.deleteProduct(this.id);
      this.router.navigate(['/']);
    })
  }

  ngOnInit(): void {
  }



}
