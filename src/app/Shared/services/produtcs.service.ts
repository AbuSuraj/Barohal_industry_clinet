import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../DataTypes/dataTypes';

@Injectable({
  providedIn: 'root'
})
export class ProdutcsService {

  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get<product[]>('http://localhost:5000/products');
  }

  getaProduct(id:any){
    return this.http.get<product>(`http://localhost:5000/product/${id}`)
  }
  getSearchProduct(categroy:string){
    return this.http.get<product[]>(`http://localhost:5000/search-products/${categroy}`)
  }

  addProduct(data: product){
    return this.http.post('http://localhost:5000/add-product', data);
  }
  
  deleteaAProduct(id: any){
    return this.http.delete(`http://localhost:5000/delete-product/${id}`);
  }
  
  updateProduct(id:string, product: product){
    return this.http.patch<product>(`http://localhost:5000/update-product/${id}`, product)
  }
}
