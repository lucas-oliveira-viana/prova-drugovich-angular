import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [
        CommonModule, ReactiveFormsModule
      ],
    });
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
