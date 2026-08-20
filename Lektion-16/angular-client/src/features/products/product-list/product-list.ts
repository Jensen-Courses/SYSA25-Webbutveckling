import { Component, signal } from '@angular/core';
import { PageTitle } from "../../../shared/components/page-title/page-title";

@Component({
  imports: [PageTitle],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  protected pageTitle = signal("Våra produkter");
}
