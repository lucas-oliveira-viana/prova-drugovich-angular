import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { CnpjFormatModule } from 'src/shared/pipes/cnpj-format/cnpj-format.module';
import { ButtonModule } from 'src/components/button/button.module';
import { CustomerService } from 'src/shared/services/customer/customer.service';

@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule, ButtonModule, CnpjFormatModule
  ],
  providers: [
    CustomerService
  ],
  exports: [
    CustomerListComponent
  ]
})

export class CustomerListModule { }
