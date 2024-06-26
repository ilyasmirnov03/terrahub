import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Item} from "../../../../interfaces/Item";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'thb-checkbox',
  templateUrl: './checkbox.component.html',
  standalone: true,
})
export class CheckboxComponent {

  constructor(
    private dbService: NgxIndexedDBService,
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
      this.dbService.add('items', item).subscribe().unsubscribe();
      this.itemsService.manageCollectedItems(1);
    } else {
      // remove from indexedDB
      this.dbService.delete('items', this.item.id).subscribe().unsubscribe();
      this.itemsService.manageCollectedItems(-1);
    }
  }
}
