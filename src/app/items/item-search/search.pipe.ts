import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../interfaces/Item";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Item[], searchText: string): Item[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter(it => it.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
