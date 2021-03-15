import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

apiUrl: string = 'http://localhost:3000/products';
productList$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { }
getAll():void {
  this.http.get<Product[]>(this.apiUrl).subscribe(
    products => this.productList$.next(products)
  );
}

remove(product: Product): Observable<Product> {
  return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
}

}
