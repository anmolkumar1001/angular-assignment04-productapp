import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent],
  template: `
    <app-products></app-products>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('assignment-2');
}
