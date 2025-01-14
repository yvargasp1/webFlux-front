import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environtment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  private URL = environment.apiUrl;

  public getProducts() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.token}`,
    });

    return this.httpClient.get<any>(`${this.URL}/product`, { headers });
  }
}
