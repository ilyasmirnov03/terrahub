import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../interfaces/item.interface";
import {Entity} from "../../interfaces/entity.interface";

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[] | Entity[], categories: string[]) {
    if (!items) {
      return [];
    }

    if (categories.length < 1) {
      return items;
    }

    return items.filter((it) => categories.includes(it.category.name));
  }

}
