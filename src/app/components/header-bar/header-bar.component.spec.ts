import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBarComponent } from './header-bar.component';
import {MatDialogModule, MatToolbarModule} from "@angular/material";

describe('HeaderBarComponent', () => {
  let component: HeaderBarComponent;
  let fixture: ComponentFixture<HeaderBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBarComponent ],
      imports: [
          MatToolbarModule,
          MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
