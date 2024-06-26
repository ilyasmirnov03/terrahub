import {Component, Input} from '@angular/core';
import {Item} from "../../../interfaces/Item";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'thb-item',
  templateUrl: './item.component.html',
  standalone: true,
  imports: [
    CheckboxComponent,
    NgIf
  ]
})
export class ItemComponent {
  @Input()
  public item!: Item;
  @Input()
  public collectionMode!: boolean;
}
