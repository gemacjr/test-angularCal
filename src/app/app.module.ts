import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { ObjectCalComponent } from './object-cal/object-cal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateInputComponent } from './date-input/date-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MonthPipe } from './month.pipe';
import { DateMonthPipe } from './date-month.pipe';
import { MonthStrPipe } from './month-str.pipe';
import { YearStrPipe } from './year-str.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    ObjectCalComponent,
    DateInputComponent,
    MonthPipe,
    DateMonthPipe,
    MonthStrPipe,
    YearStrPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
   
  ],
  exports: [
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
