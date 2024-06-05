import { Component } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ProductService } from './productservice';


import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { Product } from './product';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule 
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products!: Product[]; 
  

	
	responsiveOptions;

	constructor(private productService: ProductService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }

}
