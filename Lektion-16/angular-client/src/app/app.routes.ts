import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { ProductList } from '../features/products/product-list/product-list';
import { ProductDetails } from '../features/products/product-details/product-details';
import { About } from '../features/about/about';
import { Contact } from '../features/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'products', component: ProductList },
    { path: 'products/:id', component: ProductDetails },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
