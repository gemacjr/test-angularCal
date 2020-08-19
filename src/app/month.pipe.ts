import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: any): string {
    let monthStr;
    switch(value) {
      case 0:
        monthStr = 'JAN'
        break;
      case 1:
        monthStr = 'FEB'
        break;
      case 2:
        monthStr = 'MAR'
        break;
      case 3:
        monthStr = 'APR'
        break;
      case 4:
        monthStr = 'MAY'
        break;
      case 5:
        monthStr = 'JUNE'
        break;
      case 6:
        monthStr = 'JULY'
        break;
      case 7:
        monthStr = 'AUG'
        break;
      case 8:
        monthStr = 'SEPT'
        break;
      case 9:
        monthStr = 'OCT'
        break;
      case 10:
        monthStr = 'NOV'
        break;
      case 11:
        monthStr = 'DEC'
        break;
    }
    return monthStr;
  }

}
