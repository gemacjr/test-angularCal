import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { ObjectCalComponent } from './object-cal/object-cal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateInputComponent } from './date-input/date-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    ObjectCalComponent,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
