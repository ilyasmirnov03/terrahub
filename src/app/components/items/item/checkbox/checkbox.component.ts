import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../../../interfaces/Item";
import {ItemsService} from "../../services/items.service";
import {ItemsIndexedDbService} from "../../../../services/items-indexed-db.service";

@Component({
  selector: 'thb-checkbox',
  templateUrl: './checkbox.component.html',
  standalone: true,
})
export class CheckboxComponent {

  constructor(
    private dbService: ItemsIndexedDbService,
    private readonly itemsService: ItemsService
  ) {
  }

  @Input()
  public item!: Item;

  @Output()
  public itemScore: EventEmitter<number> = new EventEmitter<number>();

  handleCompletion(completed: boolean) {
    this.item.completed = completed;
    // item template
    const item = {
      id: this.item.id,
      completed: completed,
    };

    if (completed) {
      // save to indexedDB
      this.dbService.add(item);
      this.itemsService.manageCollectedItems(1);
    } else {
      // remove from indexedDB
      this.dbService.delete(this.item.id);
      this.itemsService.manageCollectedItems(-1);
    }
  }
}
