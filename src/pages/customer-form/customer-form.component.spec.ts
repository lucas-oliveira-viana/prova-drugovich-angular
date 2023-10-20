import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerFormComponent } from './customer-form.component';
import { CommonModule } from '@angular/common';
import { CustomerService } from 'src/shared/services/customer/customer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/components/input/input.module';
import { ButtonModule } from 'src/components/button/button.module';
import { ContentService } from 'src/components/content/content.service';
import { SelectModule } from 'src/components/select/select.module';
import { InputLabelModule } from 'src/components/input-label/input-label.module';
import { FieldErrorModule } from 'src/components/field-error/field-error.module';


describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerFormComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        InputModule,
        ButtonModule,
        SelectModule,
        InputLabelModule,
        FieldErrorModule,
      ],
      providers: [
        CustomerService, ContentService
      ],
    });
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
