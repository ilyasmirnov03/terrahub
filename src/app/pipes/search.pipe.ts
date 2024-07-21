import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../interfaces/Item";
import {Entity} from "../interfaces/Entity";

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

  transform(value: Item[] | Entity[], searchText: string): Item[] | Entity[] {
    if (!value) {
      return [];
    }

    if (!searchText) {
      return value;
    }

    return value.filter(it => it.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
