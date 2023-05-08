import {Component, Input} from '@angular/core';
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Store} from "@ngrx/store";
import {CompletedItem} from "../../interfaces/CompletedItem";
import {CompleteItem, RemoveItem} from "../../state/actions";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {

  constructor(
    private dbService: NgxIndexedDBService,
    private store: Store<{ items: CompletedItem[] }>) {
  }

  @Input() id: string = '';

  @Input() isChecked: boolean = false;

  handleCompletion(completed: boolean) {
    // item template
    const item = {
      id: this.id,
      completed: completed,
    };

    if (completed) {
      // save to indexedDB
      this.dbService.add('items', item).subscribe().unsubscribe();
      // save to store
      this.store.dispatch(CompleteItem({completedItems: item}));
    } else {
      // remove from indexedDB
      this.dbService.delete('items', this.id).subscribe().unsubscribe();
      this.store.dispatch(RemoveItem({completedItems: item}));
    }
  }
}
