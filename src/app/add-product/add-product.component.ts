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
  id: any; 
  product: product | undefined;

  constructor(private productService: ProdutcsService,  
              private router: Router,
              private route: ActivatedRoute
              )
              {}

  addProductForm!: FormGroup;
  
  ngOnInit(): void { 
     this.id = (this.route.snapshot.paramMap.get('id'))?.toString();
     console.log(this.id)
    if (this.id) {
      this.getFormValue(this.id);
    }
    this.initializeProductForm();
  
  }
  private getFormValue(id:string){
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

  save(product: product){
 console.log(product);
//  update a product
 if(this.id){
  this.productService.updateProduct(this.id, product).subscribe(result =>{
    console.log(this.id)
      this.router.navigate(['product-details']);
  })
 }
//  add a product 
 else {
   this.productService.addProduct(product).subscribe(result =>{
    console.log('product added',result);
   });
   this.addProductForm.reset()
    }
 }
}
