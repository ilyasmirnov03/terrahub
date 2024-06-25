import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'thb-search-input',
  templateUrl: './search-input.component.html',
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class SearchInputComponent {

  /**
   * Input value emitter
   */
  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Value of the search input
   */
  public searchText = '';
}
