import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartId',
  standalone: true
})
export class CartIdPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length !== 16) {
      return 'Invalid number '
    }
    var numbers=[]
    for (let i = 0; i < value.length; i += 4) {
      numbers.push(value.substr(i, 4));
    }
    return numbers.join(' - ');
  }

}
