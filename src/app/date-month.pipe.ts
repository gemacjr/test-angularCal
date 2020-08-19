import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMonth'
})
export class DateMonthPipe implements PipeTransform {

  transform(value: any): string  {

    let monthStrConvert;
    let tmp = value.split("/");
    monthStrConvert = tmp[0];

    return monthStrConvert;
  }

}
