import { Component } from '@angular/core';
import { ProdutcsService } from '../Shared/services/produtcs.service';
import { product } from '../Shared/DataTypes/dataTypes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public products: undefined|  product[] = [];
  constructor(private productService: ProdutcsService){
  }
  searchProduct(query: KeyboardEvent){
    if(query){
    const element = query.target as HTMLInputElement;
    // console.log(element.value);
    this.productService.getSearchProductByName(element.value).subscribe(result =>{
      this.products = result;
      console.log(this.products);
    })
  }
}
  hideSearch(){
    this.products = undefined;
    console.log(this.products);
  }
}
