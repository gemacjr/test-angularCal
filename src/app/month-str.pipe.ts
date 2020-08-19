import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthStr'
})
export class MonthStrPipe implements PipeTransform {

  transform(value: any): string {

    let monthStrConvert;
    let tmp = value.split("/");
    monthStrConvert = tmp[0];
    let monthStr;
    switch(monthStrConvert) {
      case '01':
        monthStr = 'JAN'
        break;
      case '02':
        monthStr = 'FEB'
        break;
      case '03':
        monthStr = 'MAR'
        break;
      case '04':
        monthStr = 'APR'
        break;
      case '05':
        monthStr = 'MAY'
        break;
      case '06':
        monthStr = 'JUNE'
        break;
      case '07':
        monthStr = 'JULY'
        break;
      case '08':
        monthStr = 'AUG'
        break;
      case '09':
        monthStr = 'SEPT'
        break;
      case '10':
        monthStr = 'OCT'
        break;
      case '11':
        monthStr = 'NOV'
        break;
      case '12':
        monthStr = 'DEC'
        break;
    }
    return monthStr;
  }

}
