import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarDemoComponent } from './menubar-demo.component';

describe('MenubarDemoComponent', () => {
  let component: MenubarDemoComponent;
  let fixture: ComponentFixture<MenubarDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
