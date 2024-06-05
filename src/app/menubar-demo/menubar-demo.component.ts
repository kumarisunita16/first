import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {MenubarModule} from 'primeng/menubar';
import{ButtonModule} from 'primeng/button'
import{InputTextModule} from 'primeng/inputtext'
             

@Component({
  selector: 'app-menubar-demo',
  standalone: true,
  imports: [ AccordionModule ,MenubarModule,BrowserAnimationsModule, ButtonModule,InputTextModule],
  templateUrl: './menubar-demo.component.html',
  styleUrl: './menubar-demo.component.css'
})
export class MenubarDemoComponent {




  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              icon:'../img/home_icon.png',
              label: 'File',
              items: [{
                      label: 'New', 
                      icon: 'pi pi-fw pi-plus',
                      items: [
                          {label: 'Project'},
                          {label: 'Other'},
                      ]
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          }
      ];
  }
}

