import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (!value) {
      return [];
    }

    if (!searchText) {
      return value;
    }

    return value.filter(it => it.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
