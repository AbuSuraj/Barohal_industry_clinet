import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProdutcsService } from '../Shared/services/produtcs.service';
import { product } from '../Shared/DataTypes/dataTypes';
import { ProductCateogries } from '../Shared/product-categories';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  products: undefined | product[];
  ProductCateogries:any;
  category:any= '';

  constructor(private http: HttpClient, private productsService: ProdutcsService, private router: Router,  private route: ActivatedRoute){
  }
  
  ngOnInit(): void {
    
    this.category = this.route.snapshot.paramMap.get('category')?.toLowerCase();
    console.log(this.category);
    this.ProductCateogries = ProductCateogries;
    if(this.category == null || undefined){
      this.productsService.getProducts().subscribe(results =>{
        this.products = results;
      })
      
    }
    else{
      this.productsService.getSearchProductByType( this.category).subscribe(result =>{
        this.products = result;
       })
    }
  }
  
  categorySelect(category:string){ 
  this.productsService.getSearchProductByType(category).subscribe(result =>{
     this.products = result;
  })
}
  }

