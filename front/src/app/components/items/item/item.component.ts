import { Component, input } from '@angular/core';

import { ItemState } from "../../../interfaces/item-state.interface";
import { ItemsIndexedDbService } from "../../../services/items-indexed-db.service";
import { ItemsService } from "../services/items.service";

@Component({
  selector: 'thb-item',
  templateUrl: './item.component.html',
  imports: [],
  host: {
    'class': 'items-center',
  }
})
export class ItemComponent {

  /**
   * Item
   */
  public readonly item = input.required<ItemState>();

  /**
   * Is in collection mode
   */
  public readonly collectionMode = input.required<boolean>();

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
    this.item().completed = completed;
    // item template
    const item = {
      id: this.item().id,
      completed: completed,
    };

    if (completed) {
      // save to indexedDB
      this.dbService.add(item);
      this.itemsService.manageCollectedItems(1);
    } else {
      // remove from indexedDB
      this.dbService.delete(item.id);
      this.itemsService.manageCollectedItems(-1);
    }
  }
}
