import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../DataTypes/dataTypes';

@Injectable({
  providedIn: 'root'
})
export class ProdutcsService {

  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get<product[]>('http://localhost:5000/get-products');
  }

  addProduct(data: product){
    return this.http.post('http://localhost:5000/add-product', data);
  }
  
  deleteaAProduct(id: any){
    return this.http.delete(`http://localhost:5000/products/${id}`);
  }
  
  updateProduct(id:any, product: product){
    return this.http.put(`http://localhost:5000/products/${id}`, product)
  }
}
