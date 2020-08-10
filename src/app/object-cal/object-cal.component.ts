import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-object-cal',
  templateUrl: './object-cal.component.html',
  styleUrls: ['./object-cal.component.css']
})
export class ObjectCalComponent implements OnInit {
  dateStr: string;
  isSelected: boolean;
  isPast: boolean;

  weekOne = [];
weekTwo = [];
 weekThree = [];
weekFour = [];
 weekFive = [];
 weekSix = [];

// try this also let weekOne = Array(7).fill({date: date, isSelected: isSelectedBool, isPast: isPastBool, isDefaultBool});
 //Array(7).fill(day);

 weekArray = new Array(7)
weeksArray = new Array(6)

 monthOne = [];

          


  constructor() { }

  ngOnInit(): void {
     console.log(this.buildYearArray())
    //console.log(this.monthOne)
  }

  buildYearArray(){
    let year = [];
    for(let i = 0; i < 12; i++){
      let monthsOfYear = this.buildMonthArray(i);
      year.push(monthsOfYear);
    }
  return year;
  }

  buildMonthArray(index){
    index = [];
    for(let i = 0; i < 6; i++){
      let daysOfWeek = this.createWeek();
      index.push(daysOfWeek);
    }
    return index;
  }

createWeek(){
  let day = {};
  let week = [];
    for(let j = 0; j < 7; j++){
      day = { 
       dateKey: this.getFullDate(),
       dateNumber: this.getDatenumber(),
       dayOfWeek: this.getDayOfWeek(), 
       isSelected: this.getIsSelected(), 
       isPast: this.getIsPast(), 
       isDefault: this.getIsDefault()
     }
     week.push(day)
   }
  return week;
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  getFullDate(): string{
    let randomDateStr = this.randomDate(new Date(2012, 0, 1), new Date());
    return randomDateStr.toDateString();
  }
  getDatenumber(){
    return '1'
  }

  getDayOfWeek(){
    return 'THU';
  }

  getIsSelected(): boolean{

    return Math.random() >= 0.5;;
  }

  getIsPast(): boolean {

    return Math.random() >= 0.5;
  }

  getIsDefault(): boolean {
    return Math.random() >= 0.5;
  }

}
