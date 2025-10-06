import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Product {
    id?: number;
    name: string;
    category: string;
    quantity: number;
}


@Injectable ({
    providedIn: 'root'
})
export class ProductService {

    private apiUrl = "http://localhost:3000/products";

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this._http.get<Product[]>(this.apiUrl);
    }

    addProduct(product: Product): Observable<Product> {
        return this._http.post<Product>(this.apiUrl, product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this._http.put<Product>(`${this.apiUrl}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<void> {
        return this._http.delete<void>(`${this.apiUrl}/${id}`);
    }

}