import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html'
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
