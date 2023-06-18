import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProdutcsService } from '../Shared/services/produtcs.service';
import { product } from '../Shared/DataTypes/dataTypes';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProductCateogries } from '../Shared/product-categories';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements  OnInit{
  id: any; 
  product: product | undefined;
  isOthersCategory: boolean = false;
  otherCategory: string = '';
  ProductCateogries:any;
  constructor(private productService: ProdutcsService,  
              private router: Router,
              private route: ActivatedRoute
              )
              {
                
              }

  addProductForm!: FormGroup;
  
  ngOnInit(): void { 
    this.ProductCateogries = ProductCateogries;
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
      categories: new FormControl(), 
    });
  }

  save(product: product){
 
//  update a product
 if(this.id){
  this.productService.updateProduct(this.id, product).subscribe(result =>{
      
      this.router.navigate(['product-list']);
  })
 }
//  add a product 
 else {
   this.productService.addProduct(product).subscribe(result =>{
   });
   this.addProductForm.reset()
    }
 }

 otherChoosen(){
   this.isOthersCategory = true;
   console.log(  this.isOthersCategory)
 }


}
