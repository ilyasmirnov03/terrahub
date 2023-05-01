import {Component, Input} from '@angular/core';
import {Item} from "../interfaces/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input()
  item!: Item;

}
