import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/Shared/DataTypes/dataTypes';
import { ProdutcsService } from 'src/app/Shared/services/produtcs.service';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.less']
})
export class SingleProductDetailsComponent implements OnInit {
   product:  product | undefined;
   id:any;
   
  constructor(private productService: ProdutcsService, private route: ActivatedRoute) {

    console.log('Single Product Details Component')
  }
  ngOnInit(): void {
    this.id = (this.route.snapshot.paramMap.get('id'))?.toString();
    console.log(this.id);
    if(this.id){
      this.productService.getaProduct(this.id).subscribe(result =>{
      this.product =result
      console.log(this.product);
    })
  }
}
}
