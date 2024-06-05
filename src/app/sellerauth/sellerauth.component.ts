import { Component, OnInit } from '@angular/core';
import { FilterService } from "primeng/api";
import { CountryService } from "./countryservice";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";


import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { AppComponent } from '../app.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-sellerauth',
  providers: [CountryService, FilterService],
  standalone: true,
  imports: [
     BrowserModule,
     FormsModule,
     BrowserAnimationsModule,
     HttpClientModule, AutoCompleteModule,
     CalendarModule,
     ChipsModule,DropdownModule,
     InputMaskModule, InputNumberModule ,
     CascadeSelectModule, MultiSelectModule,
     InputTextareaModule ,InputTextModule ,AppComponent,RouterLink,RouterOutlet
     

    ],
    
    
    
  templateUrl: './sellerauth.component.html',
  styleUrl: './sellerauth.component.css'
})
export class SellerauthComponent implements OnInit {
  countries!: any[];

    cascadeSelectCountries: any[] | undefined;

    cities: any[];

    filteredCountries: any[] | undefined;

    value1: any;

    value2: any;

    value3: any;

    value4: any;

    value5: any;

    value6: any;

    value7: any;

    value8: any;
    
    value9: any;

    value10: any;

    value11: any;

    valueIconLeft: any;

    valueIconRight: any;

    constructor(private countryService: CountryService) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });

        this.cascadeSelectCountries = [
            {
                name: 'Australia',
                code: 'AU',
                states: [
                    {
                        name: 'New South Wales',
                        cities: [
                            {cname: 'Sydney', code: 'A-SY'},
                            {cname: 'Newcastle', code: 'A-NE'},
                            {cname: 'Wollongong', code: 'A-WO'}
                        ]
                    },
                    {
                        name: 'Queensland',
                        cities: [
                            {cname: 'Brisbane', code: 'A-BR'},
                            {cname: 'Townsville', code: 'A-TO'}
                        ]
                    },
                    
                ]
            },
            {
                name: 'Canada', 
                code: 'CA',
                states: [
                    {
                        name: 'Quebec',
                        cities: [
                            {cname: 'Montreal', code: 'C-MO'},
                            {cname: 'Quebec City', code: 'C-QU'}
                        ]
                    },
                    {
                        name: 'Ontario',
                        cities: [
                            {cname: 'Ottawa', code: 'C-OT'},
                            {cname: 'Toronto', code: 'C-TO'}
                        ]
                    },
                    
                ]
            },
            {
                name: 'United States',
                code: 'US',
                states: [
                    {
                        name: 'California',
                        cities: [
                            {cname: 'Los Angeles', code: 'US-LA'},
                            {cname: 'San Diego', code: 'US-SD'},
                            {cname: 'San Francisco', code: 'US-SF'}
                        ]
                    },
                    {
                        name: 'Florida',
                        cities: [
                            {cname: 'Jacksonville', code: 'US-JA'},
                            {cname: 'Miami', code: 'US-MI'},
                            {cname: 'Tampa', code: 'US-TA'},
                            {cname: 'Orlando', code: 'US-OR'}
                        ]
                    },
                    {
                        name: 'Texas',
                        cities: [
                            {cname: 'Austin', code: 'US-AU'},
                            {cname: 'Dallas', code: 'US-DA'},
                            {cname: 'Houston', code: 'US-HO'}
                        ]
                    }
                ]
            }
        ];
    }

    searchCountry(event: { query: any; }) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        let query = event.query;
        for(let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        
        this.filteredCountries = filtered;
    }

}
