import { Component, inject, OnInit, signal } from '@angular/core';
import { PageTitle } from "../../../shared/components/page-title/page-title";
import { Product } from '../../../shared/models/product';
import { ProductCard } from "../product-card/product-card";
import { ProductService } from '../../../core/services/product-service';

@Component({
  imports: [PageTitle, ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList implements OnInit {
  private productService = inject(ProductService);
  protected pageTitle = signal("Våra produkter");
  protected products = signal<Product[]>([]);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: response => this.products.set(response.data as Product[]),
      error: error => console.log(error)
    });
  }
}
