import { ComponentFixture, TestBed } from '@angular/core/testing';
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


import { SellerauthComponent } from './sellerauth.component';

describe('SellerauthComponent', () => {
  let component: SellerauthComponent;
  let fixture: ComponentFixture<SellerauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerauthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
