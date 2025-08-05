import {Pipe, PipeTransform} from '@angular/core';
import {Entity} from "../interfaces/entity.interface";

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

  transform(value: Entity[], searchText: string): Entity[] {
    if (!value) {
      return [];
    }

    if (!searchText) {
      return value;
    }

    return value.filter(it => it.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
