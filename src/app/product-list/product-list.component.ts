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
  products: product [] = [];

  constructor(private productService: ProdutcsService){}

  ngOnInit(): void {
      this.getProducts();
  }
    
  getProducts(){
      this.productService.getProducts().subscribe(result =>{
        this.products = result;
        console.log(this.products)
      })
    }

    addProduct(){
      
    }
    update(id:any){
      console.log(id);
    }

    deleteP(id:any){
      this.productService.deleteaAProduct(id).subscribe(result =>{
        console.log('deleted ', id);
      })
      this.getProducts();
    }
}
