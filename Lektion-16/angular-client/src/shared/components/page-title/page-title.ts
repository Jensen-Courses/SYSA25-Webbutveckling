import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-title',
  styleUrl: './page-title.css',
  templateUrl: './page-title.html',
})
export class PageTitle {
  title = input.required<string>();
}
