import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnpjFormatPipe } from './cnpj-format.pipe';



@NgModule({
  declarations: [
    CnpjFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CnpjFormatPipe
  ]
})
export class CnpjFormatModule { }
