import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerFormComponent } from './customer-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/shared/components/input/input.module';
import { ButtonModule } from 'src/shared/components/button/button.module';
import { SelectModule } from 'src/shared/components/select/select.module';
import { InputLabelModule } from 'src/shared/components/input-label/input-label.module';
import { FieldErrorModule } from 'src/shared/components/field-error/field-error.module';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { ContentService } from 'src/core/components/content/content.service';


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
