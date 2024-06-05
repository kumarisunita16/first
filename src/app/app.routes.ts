import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerauthComponent } from './sellerauth/sellerauth.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    {
        'path':'',
        component:HomeComponent
        
    },
    {
        'path':'sellerauth',
        component:SellerauthComponent
        
    },
    {
        'path':'login',
        component:LoginComponent
        
    },
    {
        'path':'product',
        component:ProductsComponent
        
    },
    {
        'path':'cart',
        component:CartComponent
        
    },
];
