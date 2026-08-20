import { Component, signal } from '@angular/core';
import { PageTitle } from "../../shared/components/page-title/page-title";

@Component({
  imports: [PageTitle],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected pageTitle = signal("Välkommen till RunStore");
}
