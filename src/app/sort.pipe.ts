import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      // a-b Ascending sort
      if (a[propName] > b[propName]) {
        return 1; // true
      } else {
        return -1; // false
      }
    });
  }

}
