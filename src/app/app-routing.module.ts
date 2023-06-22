import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductDetailsComponent } from './single-product-details/single-product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add-product', component: AddProductComponent}, 
  { path: 'product-list/add-product', component: AddProductComponent}, 
  { path: 'product-list/update-product/:id', component: AddProductComponent}, 
  { path: 'products-details', component: ProductsDetailComponent},  
  { path: 'products-details/single-detail-product/:id', component: SingleProductDetailsComponent},  
  { path: 'product-list', component: ProductListComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
