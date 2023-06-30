import { Component, OnInit } from '@angular/core';
import { product } from '../Shared/DataTypes/dataTypes';
import { ProdutcsService } from '../Shared/services/produtcs.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
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
         
      })
    }

    addProduct(){
      
    }
    update(id:any){
      console.log(id);
    }

    deleteP(id:any){
      this.productService.deleteaAProduct(id).subscribe(result =>{
      })
      this.getProducts();
    }
}
