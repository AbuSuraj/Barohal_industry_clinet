import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../DataTypes/dataTypes';

@Injectable({
  providedIn: 'root'
})
export class ProdutcsService {

  constructor(private http: HttpClient) { }

  addProduct(data: product){
    return this.http.post('http://localhost:5000/add-product', data);
  }
}
