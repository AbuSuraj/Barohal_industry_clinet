import { Component, OnInit } from '@angular/core';
import { product } from '../DataTypes/dataTypes';
import { ProdutcsService } from '../services/produtcs.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public sL = 1;
  product_list: product [] = [];

  constructor(private productService: ProdutcsService){}

  ngOnInit(): void {
      this.products();
  }
    
    products(){
      this.productService.getProducts().subscribe(result =>{
        this.product_list = result;
        console.log(this.product_list)
      })
    }
}
