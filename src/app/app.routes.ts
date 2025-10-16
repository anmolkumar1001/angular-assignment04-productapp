import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/product.component';
import { AddProductComponent } from './products/add-product.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CanActivateGuard } from './guards/can-activate.guards'; 

export const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'product', component: ProductsComponent, canActivate: [CanActivateGuard]},
    {path: 'add-product', component: AddProductComponent, canDeactivate: [CanDeactivateGuard]}
];
