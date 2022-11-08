import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Producto} from './../modelos/producto'

@Injectable({
  providedIn: 'root'
})
export class ProductServService {
  API_URL = 'https://dummyjson.com/auth/products?skip=0';

  constructor(
    private http: HttpClient
  ) { }

  obtenerProductos(id){
    return this.http.get('${this.API_URL}/productos/${id}');
  }
}
