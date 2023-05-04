import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from 'src/productInterface';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://fakestoreapi.com/products';
  storeInLocal() {
    this.getProducts().subscribe((res) => {});
  }
  getProducts() {
    return this.http.get<PeriodicElement[]>(this.baseUrl);
  }
  
}
