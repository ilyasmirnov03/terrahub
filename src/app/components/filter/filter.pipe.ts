import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, categories: Array<string>) {
    if (!items) {
      return [];
    }

    if (categories.length < 1) {
      return items;
    }

    return items.filter((it: any) => categories.includes(it.category.name));
  }

}
