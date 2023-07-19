import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Item} from "../../../interfaces/Item";
import {TerraHubService} from "../../../services/terra-hub.service";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {

  constructor(
    private dbService: NgxIndexedDBService,
    private readonly terrahubService: TerraHubService
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
      this.terrahubService.manageCollectedItems(1);
    } else {
      // remove from indexedDB
      this.dbService.delete('items', this.item.id).subscribe().unsubscribe();
      this.terrahubService.manageCollectedItems(-1);
    }
  }
}
