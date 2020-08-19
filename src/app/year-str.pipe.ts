import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearStr'
})
export class YearStrPipe implements PipeTransform {

  transform(value: any): string {
    
    let monthStrConvert;
    let tmp = value.split("/");
    monthStrConvert = tmp[2];

    return monthStrConvert;
  }

}
