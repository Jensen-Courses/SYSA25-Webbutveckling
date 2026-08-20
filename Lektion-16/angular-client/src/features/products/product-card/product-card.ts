import { Component, input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  public product = input.required<Product>();
}
