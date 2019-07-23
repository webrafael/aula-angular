import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    public url = 'http://localhost:3000/v1';
    constructor(private http: HttpClient) {}

    public composeHeaders() {
        const token   = localStorage.getItem('petshop.token');
<<<<<<< HEAD
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
=======
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
>>>>>>> 768fd2bdbbf7734e21725501b953b05b1eb0c8b9
        return headers;
    }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken() {
        return this.http.post(`${this.url}/accounts/refresh-token`, null, { headers: this.composeHeaders() });
    }
}
