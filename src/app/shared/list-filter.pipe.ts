import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(arr: string[], query?: string): any {
    if (query && typeof query === 'string') {
      return arr.filter(str => str.includes(query));
    }
    return arr;
  }

}
