import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, NgxMaskDirective
  ],
  exports: [
    InputComponent
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class InputModule { }
