import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutcsService } from '../services/produtcs.service';
import { product } from '../DataTypes/dataTypes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements  OnInit{
  id: number | string | null= 0; 
  product: product | undefined;

  constructor(private productService: ProdutcsService,  
              private router: Router,
              private route: ActivatedRoute
              )
              {}

  addProductForm!: FormGroup;
  
  ngOnInit(): void { 
     this.id = this.route.snapshot.paramMap.get('id');
     console.log(this.id)
    if (this.id) {
      this.getFormValue(this.id);
    }
    this.initializeProductForm();
  
  }
  private getFormValue(id:any){
    this.productService.getaProduct(id).subscribe(result =>{
      this.product = result;
      if(result){
        this.addProductForm.patchValue({
        name: result.name,
        price: result.price,
        description: result.description,
        image: result.image
      })
    }
    })
  }

  initializeProductForm(){
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
