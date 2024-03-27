import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
  
})
export class ApiPrdService {

  constructor(private httpclient:HttpClient) { }

  getallproudcts(): Observable<Iproduct[]> {
    return this.httpclient.get<Iproduct[]>("http://localhost:3000/products");
  }

  getprdBYId(id: number): Observable<Iproduct> {
    return this.httpclient.get<Iproduct>(`http://localhost:3000/${id}`);
  }

  getByCatId(catId: number): Observable<Iproduct[]> {
    return this.httpclient.get<Iproduct[]>(`http://localhost:3000/products?catId=${catId}`);
  }

  // addProduct(product: Iproduct): Observable<Iproduct> {
  //   return this.httpclient.post<Iproduct>("http://localhost:3000/products", JSON.stringify(product));
  // }

  updateProduct(id: number, product: Iproduct): Observable<Iproduct> {
    return this.httpclient.put<Iproduct>(`http://localhost:3000/products/${id}`, JSON.stringify(product));
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpclient.delete<void>(`http://localhost:3000/products/${id}`);
  }
}
