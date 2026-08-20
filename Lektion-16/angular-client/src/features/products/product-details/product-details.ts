import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../shared/models/product';
import { PageTitle } from "../../../shared/components/page-title/page-title";

@Component({
  imports: [PageTitle],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  protected product = signal<Product | undefined>(undefined);

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productService.getProduct(id).subscribe({
        next: response => this.product.set(response.data as Product),
        error: error => console.log(error)
      });
    }
  }
}
