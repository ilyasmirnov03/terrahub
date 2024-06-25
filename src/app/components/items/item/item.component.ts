import {Component, Input} from '@angular/core';
import {Item} from "../../../interfaces/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input()
  public item!: Item;
  @Input()
  public collectionMode!: boolean;
}
