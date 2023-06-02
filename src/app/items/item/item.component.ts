import {Component, Input} from '@angular/core';
import {Item} from "../../interfaces/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input()
  item!: Item;
  @Input()
  collectionMode!: boolean;
}
