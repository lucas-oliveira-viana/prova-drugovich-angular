import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentService } from './content.service';
import { ButtonModule } from 'src/shared/components/button/button.module';
import { IconProviderModule } from 'src/shared/components/icon-provider/icon-provider.module';
import { CustomerFormModule } from 'src/app/pages/customer-form/customer-form.module';
import { CustomerListModule } from 'src/app/pages/customer-list/customer-list.module';

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
