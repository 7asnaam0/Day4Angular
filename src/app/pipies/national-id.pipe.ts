import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId',
  standalone: true
})
export class NationalIdPipe implements PipeTransform {

  transform(value: string,  partindata: string):string{

    if (value.length != 14) {
      return 'Iinvaild';
    }

    var year = value.substr(1, 2);
    var month = value.substr(3, 2);
    var day = value.substr(5, 2);

    if (partindata === 'YY') {
      return year;
    } else if (partindata === 'MM') {
      return month;
    } else if (partindata === 'DD') {
      return day;
    } else if (partindata === 'date') {
      return `${day}-${month}-${'19' + year}`;
  }
  else {
    return 'not found part';

}
}}