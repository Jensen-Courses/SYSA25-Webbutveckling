import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ApiResponse } from '../../shared/models/apiResponse';
import { Product } from '../../shared/models/product';
import { environment } from '../../environments/environment';

@Service()
export class ProductService {
    baseUrl = environment.apiUrl;
    private http = inject(HttpClient);

    getProducts() {
        return this.http.get<ApiResponse<Product>>(this.baseUrl + 'products');
    }

    getProduct(id: string) {
        return this.http.get<ApiResponse<Product>>(this.baseUrl + 'products/' + id);
    }
}
