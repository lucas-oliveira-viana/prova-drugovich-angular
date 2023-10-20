import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconProviderModule } from '../icon-provider/icon-provider.module';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    IconProviderModule, CommonModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
