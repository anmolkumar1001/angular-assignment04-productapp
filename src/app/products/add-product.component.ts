import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  newProduct = { name: '', category: '', quantity: 0 };
  categories = ['Computers', 'Mobiles', 'Appliances'];

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(form: NgForm) {
    if (form.valid) {
      this.productService.addProduct(this.newProduct).subscribe(() => {
        alert('Product added successfully!');
        this.router.navigate(['/products']);
      });
    }
  }
}
