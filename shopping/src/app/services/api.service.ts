import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private data:HttpClient) { }

  CategoriesDetails():Observable<any|null>{
    return this.data.get<any|null>('http://fakestoreapi.com/products/categories');
    
  }

  ProductsDetails():Observable<any[]>{
    return this.data.get<any[]>('http://fakestoreapi.com/products');
  }


} 
