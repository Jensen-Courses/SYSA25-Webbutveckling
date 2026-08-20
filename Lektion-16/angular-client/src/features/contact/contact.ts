import { Component, signal } from '@angular/core';
import { PageTitle } from "../../shared/components/page-title/page-title";

@Component({
  imports: [PageTitle],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  protected pageTitle = signal("Kontakta Oss");
}
