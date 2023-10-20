import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CustomerListModule } from 'src/pages/customer-list/customer-list.module';
import { CustomerFormModule } from 'src/pages/customer-form/customer-form.module';
import { ContentService } from './content.service';
import { IconProviderModule } from '../icon-provider/icon-provider.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  providers: [
    ContentService
  ],
  imports: [
    CustomerListModule, CustomerFormModule, IconProviderModule, ButtonModule, CommonModule
  ],
  exports: [
    ContentComponent
  ]
})

export class ContentModule { }
