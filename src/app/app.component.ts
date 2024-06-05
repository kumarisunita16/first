import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {MenubarModule} from 'primeng/menubar';
import {  MenubarDemoComponent } from './menubar-demo/menubar-demo.component';
import { HeaderComponent } from "./header/header.component";
             


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AccordionModule, MenubarModule, MenubarDemoComponent, HeaderComponent,RouterLink]
})
export class AppComponent {
  title = 'first';
}
