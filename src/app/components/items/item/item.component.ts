import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {ItemState} from "../../../interfaces/item-state.interface";
import {ItemsIndexedDbService} from "../../../services/items-indexed-db.service";
import {ItemsService} from "../services/items.service";

@Component({
    selector: 'thb-item',
    templateUrl: './item.component.html',
    imports: [
        NgIf
    ],
    host: {
        'class': 'items-center',
    }
})
export class ItemComponent {

  /**
   * Item
   */
  @Input()
  public item!: ItemState;

  /**
   * Is in collection mode
   */
  @Input()
  public collectionMode!: boolean;

  public constructor(
    private readonly dbService: ItemsIndexedDbService,
    private readonly itemsService: ItemsService,
  ) {
  }

  /**
   * Handle checkbox completion
   * @param completed
   * @protected
   */
  protected handleCompletion(completed: boolean): void {
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
