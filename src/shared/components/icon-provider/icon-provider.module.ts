import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconProviderComponent } from './icon-provider.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    IconProviderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconProviderComponent, HttpClientModule
  ]
})

export class IconProviderModule { }
