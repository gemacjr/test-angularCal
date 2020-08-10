import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { ObjectCalComponent } from './object-cal/object-cal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    ObjectCalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
