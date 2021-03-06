import { OnInit, ChangeDetectionStrategy, Component, ViewEncapsulation, ComponentFactoryResolver } from '@angular/core';
import * as Holidays from 'date-holidays';


@Component({
  selector: 'app-object-cal',
  templateUrl: './object-cal.component.html',
  styleUrls: ['./object-cal.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectCalComponent implements OnInit {
  currentYear = 2021;
  dateStr: string;
  isSelected: boolean;
  isPast: boolean;

  monthOne = [];
  monthJanArray = [];
  monthFebArray = [];
  monthMarArray = [];
  monthAprArray = [];
  monthMayArray = [];
  monthJuneArray = [];
  monthJulyArray = [];
  monthAugArray = [];
  monthSeptArray = [];
  monthOctArray = [];
  monthNovArray = [];
  monthDecArray = [];

  monthArray = [];
  selectedDates: string[];

  monthName: string;

  constructor() {}

  testMyYearArray = [];

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

  

  

  testmonthJan = [];

  days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  closureDates = [];

  updatedClosureDates = [];

  

  ngOnInit(): void {
    //console.log(this.buildYearArray())
    // console.log(this.buildMonthArray('JAN', '01/02/2020'));
    //console.log(this.monthOne)

    //this.holidayDays = this.getHolidaysByYear('2022')
   this.holidayDays = this.getHolidaysByYear('2020')
    this.updatedClosureDates =[];
    
    this.myYearArray = this.buildYearArray('2020');
    this.newDate = this.myYearArray[0][0];
    this.newDate.isSelected = true;
    this.days;
    
    //this.buildYearArrayForUi('2022');
    //console.log(this.buildMonthArray("02", "2021"));
    this.testbuildYearArrayForUi('2021')

    console.log(this.testbuildYearArrayForUi('2021'))

    this.testmonthJan = this.buildMonthArray('01', '2021');
    //console.log(this.buildMonthArray("02", "2021"))
    //console.log(this.myYearArray[0]);
    //this.createMonthArray(this.myYearArray);
    this.selectedDates = new Array<string>();

    console.log("The current closure dates " + JSON.stringify(this.closureDates))
  }

getOrderedClosureDates(closureDates){
  console.log(typeof closureDates)
  let parsedDatesArray = JSON.stringify(closureDates);
  let strArray = JSON.parse(parsedDatesArray);
  strArray.sort();
    console.log("This is it " + strArray);

    return strArray;
}
  displayCurrentPharmacyClosures(updatedClosureDates){

    let dayClosure ={}
    this.updatedClosureDates = [];

    for(let i = 0; i < updatedClosureDates.length; i++){
      let tmpDay = updatedClosureDates[i];
      let dateStr = tmpDay.split("/");
      let month = dateStr[0];
      let dayNumStr = dateStr[1];
      let year = dateStr[2];
      dayClosure = {
        dateKey: month + '/' + dayNumStr + '/' + year,
        dateNumber: dayNumStr,
        dayOfWeek: this.getDayOfWeek(month + '/' + dayNumStr + '/' + year),
        isSelected: true,
        isPast: this.getIsPast(month + '/' + dayNumStr + '/' + year),
        isDefault: false,
      };
      this.updatedClosureDates.push(dayClosure);
    }
    

    return this.updatedClosureDates;
  }
  submitClosureDates(){
    let submittedClosureDates = JSON.stringify(this.closureDates)
    console.log("These are the closure dates " + submittedClosureDates);

  }

  getTooltipText(isPast: boolean) {
    var text: string = "";
    if (isPast) {
      text = "This is a standard Cardinal Health delivery closure. No customization is possible for this date.";
    }
    else {
      text = "The submission time for this date has passed. Please contact customer service for further assistance.";
    }
    return text;
  }


  // buildYearArrayForUi(year) {
  //   this.monthJanArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('01', year)
  //   );
  //   this.monthFebArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('02', year)
  //   );
  //   this.monthMarArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('03', year)
  //   );
  //   this.monthAprArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('04', year)
  //   );
  //   this.monthMayArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('05', year)
  //   );
  //   this.monthJuneArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('06', year)
  //   );
  //   this.monthJulyArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('07', year)
  //   );
  //   this.monthAugArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('08', year)
  //   );
  //   this.monthSeptArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('09', year)
  //   );
  //   this.monthOctArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('10', year)
  //   );
  //   this.monthNovArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('11', year)
  //   );
  //   this.monthDecArray = this.buildMonthArrayFromyYearArray(
  //     this.buildMonthArray('12', year)
  //   );
  // }

  testbuildYearArrayForUi(year) {
    this.monthJanArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('01', year)
    );
    this.monthFebArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('02', year)
    );
    this.monthMarArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('03', year)
    );
    this.monthAprArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('04', year)
    );
    this.monthMayArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('05', year)
    );
    this.monthJuneArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('06', year)
    );
    this.monthJulyArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('07', year)
    );
    this.monthAugArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('08', year)
    );
    this.monthSeptArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('09', year)
    );
    this.monthOctArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('10', year)
    );
    this.monthNovArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('11', year)
    );
    this.monthDecArray = this.buildMonthArrayFromyYearArray(
      this.buildMonthArray('12', year)
    );
    this.testMyYearArray =[
      this.monthJanArray,this.monthFebArray,this.monthMarArray,this.monthAprArray,
      this.monthMayArray,this.monthJuneArray,this.monthJulyArray,this.monthAugArray,
      this.monthSeptArray,this.monthOctArray,this.monthNovArray,this.monthDecArray,

    ]
    return this.testMyYearArray;
  }

  buildYearArray(currentYear) {
    let year = [];
    for (let i = 0; i < 12; i++) {
      let monthsOfYear = this.buildMonthArray((i + 1).toString(), currentYear);
      year.push(monthsOfYear);
    }
    return year;
  }

  getYear(year) {
    this.getHolidaysByYear(year);
    this.testbuildYearArrayForUi(year);
    this.holidayDays = this.getHolidaysByYear(year)
  }

  ///IT works Aug

  getDateId(isSelectedNow: any, dateId: string) {
    let sortedClosureDates;
    let splitDate = dateId.split("/", 3);
    let currentYear = splitDate[2];
    console.log("This is selected " + isSelectedNow)
    if (isSelectedNow === false) {
      console.log(dateId + ' is Checked');
      this.closureDates.push(dateId);
      
    } else {
      console.log(dateId + 'unChecked');
      
      this.closureDates = this.closureDates.filter((m) => m != dateId);
    }

    sortedClosureDates = this.getOrderedClosureDates(this.closureDates);
    this.testbuildYearArrayForUi(currentYear);
    this.displayCurrentPharmacyClosures(sortedClosureDates);
    
    console.log('The array of closure Dates ' + sortedClosureDates);
    
  }

  buildMonthArrayFromyYearArray(arrayOfWeeks) {
    let weekOneArray = [];
    let weekTwoArray = [];
    let weekThreeArray = [];
    let weekFourArray = [];
    let weekFiveArray = [];
    let weekSixArray = [];

    weekOneArray = arrayOfWeeks.splice(0, 7);
    weekTwoArray = arrayOfWeeks.splice(0, 7);
    weekThreeArray = arrayOfWeeks.splice(0, 7);
    weekFourArray = arrayOfWeeks.splice(0, 7);
    weekFiveArray = arrayOfWeeks.splice(0, 7);
    weekSixArray = arrayOfWeeks.splice(0, 7);

    this.monthArray = [
      weekOneArray,
      weekTwoArray,
      weekThreeArray,
      weekFourArray,
      weekFiveArray,
      weekSixArray,
    ];

    return this.monthArray;
  }

  buildMonthArray(monthStr, yearStr) {
    let day = {};
    let daySpare = {};
    let dayEnd = {};
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
        isSelected: this.getIsSelected(
          month + '/' + dayNumStr + '/' + year,
          this.closureDates
        ),
        isPast: this.getIsPast(month + '/' + dayNumStr + '/' + year),
        isDefault: this.getIsDefault(month + '/' + dayNumStr + '/' + year)
      };
      monthArray.push(day);
    }

    if (monthArray[0].dateNumber === '01') {
      let numberOfDaysToAdd = this.getFirstDayOfWeekLength(
        monthArray[0].dayOfWeek
      );

      for (let k = 0; k < numberOfDaysToAdd; k++) {
        daySpare = {
          dateKey: '00/00/0000',
          dateNumber: '00',
          dayOfWeek: '',
          isSelected: false,
          isPast: true,
          isDefault: false
        };
        monthArray.unshift(daySpare);
      }
    }
    if (monthArray.length > 28) {
      let finalWeekCount = this.getLastDayOfWeekLength(
        this.getDayOfWeek(month + '/' + numberOfDaysInMonth + '/' + year)
      );
      for (let i = 0; i < finalWeekCount; i++) {
        dayEnd = {
          dateKey: '00/00/0000',
          dateNumber: '00',
          dayOfWeek: '',
          isSelected: false,
          isPast: true,
          isDefault: false
        };
        monthArray.push(dayEnd);
      }
    }
    if (monthArray.length === 35) {
      for (let i = 0; i < 7; i++) {
        dayEnd = {
          dateKey: '00/00/0000',
          dateNumber: '00',
          dayOfWeek: '',
          isSelected: false,
          isPast: true,
          isDefault: false
        };
        monthArray.push(dayEnd);
      }
    }
    //console.log("This is month " + JSON.stringify(monthArray[numberOfDaysInMonth]))

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

  getIsHoliday(dateString): boolean {
    let currentYearHolidays = this.getHolidaysByYear(dateString.split("/")[2]);
   
    return currentYearHolidays.includes(dateString);
  }

  getIsDefault(dateString): boolean {
    this.holidayDays 
    
    let isDefault;
    this.getDayOfWeek(dateString);
    if (this.getDayOfWeek(dateString) === 'SUN' || this.getDayOfWeek(dateString) === 'SAT' || this.holidayDays.includes(dateString)) {
      isDefault = true;
    } else {
      isDefault = false;
    }
    return isDefault;
  }

  getHolidaysByYear(year){
    let hd = new Holidays('US');
    let holidayArray = [];
    let currentYearHolidays = [];
    let holidayStrArray = [];
    

    holidayArray = hd.getHolidays(year);
    //console.log("This year holidays " + JSON.stringify(holidayArray[0]))

    holidayArray.forEach(day => {
      let NYE = "New Year's Day";
      let MD = "Memorial Day";
      let ID = "Independence Day";
      let LBD = "Labor Day";
      let TH = "Thanksgiving Day";
      let CD = "Christmas Day"
      switch(day.name){
        case NYE:
          currentYearHolidays.push(day);
          break;
        case MD:
          currentYearHolidays.push(day);
          break;
        case ID:
          currentYearHolidays.push(day);
          break;
        case LBD:
          currentYearHolidays.push(day);
          break;
        case TH:
          currentYearHolidays.push(day);
          break;
        case CD:
          currentYearHolidays.push(day);
      }
    });
    currentYearHolidays.forEach( day => {
      let splitDate = day.date.split(" ")[0];
      let yearStr = splitDate.split('-')[0];
      let monthStr =splitDate.split('-')[1];
      let dayStr = splitDate.split('-')[2];
      let finalDate = monthStr + "/" + dayStr + "/" + yearStr;
      holidayStrArray.push(finalDate);
    });
    

    return holidayStrArray;
    
  }

  getFirstDayOfWeekLength(dayOfFirstWeek) {
    let numberOfDays = 0;
    switch (dayOfFirstWeek) {
      case 'SUN':
        numberOfDays = 0;
        break;
      case 'MON':
        numberOfDays = 1;
        break;
      case 'TUE':
        numberOfDays = 2;
        break;
      case 'WED':
        numberOfDays = 3;
        break;
      case 'THU':
        numberOfDays = 4;
        break;
      case 'FRI':
        numberOfDays = 5;
        break;
      default:
        numberOfDays = 6;
    }
    return numberOfDays;
  }

  getLastDayOfWeekLength(dayOflastWeek) {
    let numberOfDays = 0;
    switch (dayOflastWeek) {
      case 'SUN':
        numberOfDays = 6;
        break;
      case 'MON':
        numberOfDays = 5;
        break;
      case 'TUE':
        numberOfDays = 4;
        break;
      case 'WED':
        numberOfDays = 3;
        break;
      case 'THU':
        numberOfDays = 2;
        break;
      case 'FRI':
        numberOfDays = 1;
        break;
      default:
        numberOfDays = 0;
    }
    return numberOfDays;
  }
}




// createMonthArray(yearArray) {
    
//   let newYearArray = []
//   let tmp = yearArray[0][0];
//   let year = yearArray[0][0].dateKey.split("/")
//   console.log(year[2]);
//   let numDaysOfMonth = this.getDaysInaMonth(year[0],year[2]) //"01" "2020"
  
//    yearArray.forEach(( month, index) => {
      
//       let length = month.length -1;
//       let lengthOfFirstWeek

//       month.forEach(( week, monthIndex) => {
        
//         let month = [];

        // if(week.dateNumber =="01"){
        //   lengthOfFirstWeek = this.getFirstDayOfWeekLength(week.dayOfWeek)
        //   console.log(week) //objectg
        //   console.log(lengthOfFirstWeek); //length of first week
        //   for(let l = 0; l < lengthOfFirstWeek; l++){
        //     month.push(week);
        //     console.log("This is the month of first " + JSON.stringify(month));
        //   }

        // }
//     });
      
//     });
  
  

//   return newYearArray;
// }