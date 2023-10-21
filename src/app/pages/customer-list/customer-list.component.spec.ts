import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/components/button/button.module';
import { CnpjFormatModule } from 'src/shared/pipes/cnpj-format/cnpj-format.module';
import { CustomerService } from 'src/shared/services/customer/customer.service';
import { ContentService } from 'src/components/content/content.service';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomerListComponent
      ],
      imports: [
        CommonModule, ButtonModule, CnpjFormatModule
      ],
      providers: [
        CustomerService, ContentService
      ]
    });
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
