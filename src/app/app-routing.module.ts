import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'update-product',component:UpdateProductComponent},
  {path:'products',component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
