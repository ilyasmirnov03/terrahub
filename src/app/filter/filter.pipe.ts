import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../items/interfaces/Item";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[], categories: Array<string>): Item[] {
    if (!items) {
      return [];
    }

    if (categories.length < 1) {
      return items;
    }

    return items.filter(it => categories.includes(it.category.name));
  }

}
