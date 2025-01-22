import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environtment';
import { Products } from '../models/products/products.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  private URL = environment.apiUrl

  public getProducts() {
    return this.httpClient.get<Products[]>(`${this.URL}/product`)
  }

  public saveProduct(product: Products): Observable<Products> {
    return this.httpClient.post<Products>(`${this.URL}/product`, product)
  }
}
