import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from 'src/core/components/header/header.module';
import { ContentModule } from 'src/core/components/content/content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeaderModule, ContentModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
