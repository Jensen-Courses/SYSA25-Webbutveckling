import { Component, signal } from '@angular/core';
import { PageTitle } from "../../shared/components/page-title/page-title";

@Component({
  imports: [PageTitle],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  protected pageTitle = signal("Om Oss");
}
