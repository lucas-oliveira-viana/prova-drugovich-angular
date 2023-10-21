import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjFormatModule } from 'src/shared/pipes/cnpj-format/cnpj-format.module';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { ButtonModule } from 'src/shared/components/button/button.module';
import { CustomerListComponent } from './customer-list.component';

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
