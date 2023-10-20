import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IconProviderModule } from '../icon-provider/icon-provider.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule, IconProviderModule
  ],
  exports: [
    HeaderComponent
  ]
})

export class HeaderModule { }
