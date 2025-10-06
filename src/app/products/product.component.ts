import { Component, OnInit } from "@angular/core";
import { Product, ProductService } from "./product.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-products',
    standalone: true, 
    imports: [CommonModule, FormsModule],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductsComponent implements OnInit {
    categories: string[] = ['Computers', 'Moblies', 'Appliances'];
    products: Product[] = [];
    newProduct: Product = {name: '', category: '', quantity: 0};

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }

    addProduct() {
        if(this.newProduct.name && this.newProduct.category && this.newProduct.quantity > 0) {
            this.productService.addProduct({...this.newProduct}).subscribe(() => {
                this.loadProducts();
                this.newProduct = {name: '', category: '', quantity: 0};
            });
        }
    }

    deleteProduct(id: number) {
        this.productService.deleteProduct(id).subscribe(() => {
            this.loadProducts();
        })
    }
}