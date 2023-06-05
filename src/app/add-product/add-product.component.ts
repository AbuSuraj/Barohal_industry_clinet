import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutcsService } from '../services/produtcs.service';
import { product } from '../DataTypes/dataTypes';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements  OnInit{

  constructor(private productService: ProdutcsService){}

  addProductForm!: FormGroup;
  
  ngOnInit(): void { 
    this.addProductForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      image: new FormControl(), 
    });
  }


  addProduct(product: product){
 console.log(product);
 this.productService.addProduct(product).subscribe(result =>{
  console.log('product added',result);
 });
 this.addProductForm.reset()
  }
}
