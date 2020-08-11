import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { strict } from 'assert';
import { callbackify } from 'util';

@Component({
  selector: 'app-object-cal',
  templateUrl: './object-cal.component.html',
  styleUrls: ['./object-cal.component.css'],
})
export class ObjectCalComponent implements OnInit {
  dateStr: string;
  isSelected: boolean;
  isPast: boolean;

  monthOne = [];

  monthName: string;

  constructor() {}

  myYearArray;
  newDate;
  holidayDays = [
    '01/01/2020',
    '05/25/2020',
    '07/04/2020',
    '09/07/2020',
    '11/26/2020',
    '12/25/2020',
  ];

  holidays = {
    "4,5,1": "Memorial Day",
    "8,1,1": "Labor Day",
    "10,4,4": "Thanksgiving"
  }

  closureDates = ['02/02/2020', '08/06/2020', '08/07/2020'];

  ngOnInit(): void {
    //console.log(this.buildYearArray())
    // console.log(this.buildMonthArray('JAN', '01/02/2020'));
    //console.log(this.monthOne)

    console.log(this.buildYearArray('2020'));
    this.myYearArray = this.buildYearArray('2020');
    this.newDate = this.myYearArray[0][0];
    this.newDate.isSelected = true;
    console.log(this.myYearArray);
    this.createMonthArray(this.myYearArray);
  }

  createMonthArray(yearArray) {
    
    let newYearArray = []
    let tmp = yearArray[0][0];
    let year = yearArray[0][0].dateKey.split("/")
    console.log(year[2]);
    let numDaysOfMonth = this.getDaysInaMonth(year[0],year[2]) //"01" "2020"
    // first week array find dayOfWeek
    console.log(numDaysOfMonth) // 31 for Jan
    console.log(tmp.dateNumber)
    console.log(tmp.dayOfWeek);


      yearArray.forEach(( month, index) => {
        
        let length = month.length -1;
        let lengthOfFirstWeek

        month.forEach(( week, monthIndex) => {
          
          let month = [];

          // if(week.dateNumber =="01"){
          //   lengthOfFirstWeek = this.getFirstDayOfWeekLength(week.dayOfWeek)
          //   console.log(week) //objectg
          //   console.log(lengthOfFirstWeek); //length of first week
          //   for(let l = 0; l < lengthOfFirstWeek; l++){
          //     month.push(week);
          //     console.log("This is the month of first " + JSON.stringify(month));
          //   }

          // }
      });
        
      });
    
    

    return newYearArray;
  }

  getFirstDayOfWeekLength(dayOfFirstWeek){
    let numberOfDays = 0;
    switch(dayOfFirstWeek){
      case "SUN":
        numberOfDays = 7;
        break;
      case "MON":
        numberOfDays = 6;
        break;
      case "TUE":
        numberOfDays = 5;
        break;
      case "WED":
        numberOfDays = 4;
        break;
      case "THU":
        numberOfDays = 3;
        break;
      case "FRI":
        numberOfDays = 2;
        break;
      default:
        numberOfDays = 1
    }
    return numberOfDays;
  }

  buildYearArray(currentYear) {
    let year = [];
    for (let i = 0; i < 12; i++) {
      let monthsOfYear = this.testBuildMonthArray(
        (i + 1).toString(),
        currentYear
      );
      year.push(monthsOfYear);
    }
    return year;
  }

  testBuildMonthArray(monthStr, yearStr) {
    let day = {};
    let monthArray = [];
    let month;
    let numberOfDaysInMonth = this.getDaysInaMonth(monthStr, yearStr);
    if (monthStr.length === 1) {
      month = '0' + monthStr;
    } else {
      month = monthStr;
    }
    let year = yearStr;

    for (let i = 0; i < numberOfDaysInMonth; i++) {
      let dayNumStr;
      if (i + 1 < 10) {
        dayNumStr = '0' + (i + 1).toString();
      } else {
        dayNumStr = (i + 1).toString();
      }
      day = {
        dateKey: month + '/' + dayNumStr + '/' + year,
        dateNumber: dayNumStr,
        dayOfWeek: this.getDayOfWeek(month + '/' + dayNumStr + '/' + year),
        isSelected: this.getIsSelected(month + '/' + dayNumStr + '/' + year, this.closureDates),
        isPast: this.getIsPast(month + '/' + dayNumStr + '/' + year),
        isSunday: this.getIsDefault(month + '/' + dayNumStr + '/' + year),
        isHoliday: this.getIsHoliday(month + '/' + dayNumStr + '/' + year, this.holidayDays)
      };

      monthArray.push(day);
    }

    return monthArray;
  }

  getDaysInaMonth(month, year) {
    let monthNumber = parseInt(month);
    let yearNumber = parseInt(year);
    return new Date(yearNumber, monthNumber, 0).getDate();
  }

  getDayOfWeek(dateClosure) {
    let month = parseInt(dateClosure.slice(0, 2));
    let day = parseInt(dateClosure.slice(3, 5));
    let year = parseInt(dateClosure.slice(6, 10));
    let weekDay = '';
    if (month < 3) {
      month = month + 12;
      year = year - 1;
    }
    let cal = Math.floor(year / 100);
    let key = year - 100 * cal;
    let set =
      Math.floor(2.6 * month - 5.39) +
      Math.floor(key / 4) +
      Math.floor(cal / 4) +
      day +
      key -
      2 * cal;
    let ans = set - 7 * Math.floor(set / 7);
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    weekDay = weekDays[ans];
    return weekDay;
  }


  getIsSelected(dateString, closureDates): boolean {

    return closureDates.includes(dateString);
  }

  getIsPast(dateProvided): boolean {
    let date = new Date();
    let dayIs14FromHoliday = true;
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let todayDateString =
      (m <= 9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d) + '/' + y;

    let pastDate = Date.now() + -14 * 24 * 3600 * 1000;
    let pastDateMinus14 = new Date(pastDate);
    let past14Date = pastDateMinus14.toLocaleDateString;
    let dPast = pastDateMinus14.getDate();
    let mPast = pastDateMinus14.getMonth() + 1;
    let yPast = pastDateMinus14.getFullYear();
    let pastDateString =
      (mPast <= 9 ? '0' + mPast : mPast) +
      '/' +
      (dPast <= 9 ? '0' + dPast : dPast) +
      '/' +
      yPast;
    this.holidayDays.forEach((element) => {
      if (element === pastDateString) {
        dayIs14FromHoliday = true;
      } else {
        dayIs14FromHoliday = false;
      }
    });
    let isPastDate = false;
    let todayDate = new Date(todayDateString);
    let providedDate = new Date(dateProvided);
    if (todayDate > providedDate || dayIs14FromHoliday) {
      //||  dateProvided === '12/31/2019'
      isPastDate = true;
    } else {
      isPastDate = false;
    }
    return isPastDate;
  }

  getIsHoliday(dateString, holidayDays): boolean {
    return holidayDays.includes(dateString);
  }

  getIsDefault(dateString): boolean {
    let isSunday;
    this.getDayOfWeek(dateString);
    if (this.getDayOfWeek(dateString) === 'SUN') {
      isSunday = true;
    } else {
      isSunday = false;
    }
    return isSunday;
  }

  isHoliday(date) {
    // static holidays
    const isDate = (d, month, date) => {
        return d.getMonth() == (month - 1) && d.getDate() == date;
    };
    if (isDate(date, 1, 1)) { return "New Year"; }
    else if (isDate(date, 7, 4)) { return "Independence Day"; }
    else if (isDate(date, 12, 25)) { return "Christmas Day"; }

    // dynamic holidays
    const isDay = (d, month, day, occurance) => {
        if (d.getMonth() == (month - 1) && d.getDay() == day) {
            if (occurance > 0) {
                return occurance == Math.ceil(d.getDate() / 7);
            } else {
                // check last occurance
                let _d = new Date(d);
                _d.setDate(d.getDate() + 7);
                return _d.getMonth() > d.getMonth();
            }
        }
        return false;
    };
    if (isDay(date, 5, 1, -1)) { return "Memorial Day"; }
    else if (isDay(date, 9, 1, 1)) { return "Labor Day"; }
    else if (isDay(date, 11, 4, 4)) { return "Thanksgiving Day"; }

    

    // not a holiday
    return "";
}
}
