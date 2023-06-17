import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProdutcsService } from '../services/produtcs.service';
import { product } from '../DataTypes/dataTypes';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  products: undefined | product[];

  constructor(private http: HttpClient, private productsService: ProdutcsService){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(results =>{
      this.products = results;
    })
  }

}
