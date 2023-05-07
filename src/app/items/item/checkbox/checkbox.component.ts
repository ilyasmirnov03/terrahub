import {Component, Input} from '@angular/core';
import {NgxIndexedDBService} from "ngx-indexed-db";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {

  constructor(private dbService: NgxIndexedDBService) {
  }

  @Input() id: string = '';

  @Input() isChecked: boolean = false;

  handleCompletion(completed: boolean) {
    if (completed) {
      this.dbService.add('items', {
        id: this.id,
        completed: completed,
      }).subscribe().unsubscribe();
    } else {
      this.dbService.delete('items', this.id).subscribe().unsubscribe();
    }
  }
}
