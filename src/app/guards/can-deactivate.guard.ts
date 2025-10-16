import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { AddProductComponent } from "../products/add-product.component";

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<AddProductComponent> {
    canDeactivate(component: AddProductComponent): boolean {
        if(component.newProduct.name || component.newProduct.category || component.newProduct.quantity) {
            return confirm('Are you sure you want to leave this page? Unsaved changes will be lost.');
        }
        return true;
    }
    
}