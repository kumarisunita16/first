import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerauthComponent } from './sellerauth/sellerauth.component';


export const routes: Routes = [
    {
        'path':'',
        component:HomeComponent
        
    },
    {
        'path':'sellerauth',
        component:SellerauthComponent
        
    }
];
