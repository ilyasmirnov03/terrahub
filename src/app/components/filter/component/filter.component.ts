import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: '[app-filter]',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  /**
   * Inputted category names to render
   */
  @Input()
  categoryName!: string;

  /**
   * Emitter of the selected category to parent
   */
  @Output()
  selectedCategoryEvent: EventEmitter<string> = new EventEmitter<string>;

  /**
   * Emit selected category to parent
   * @param category
   */
  public emitCategory(category: string): void {
    this.selectedCategoryEvent.emit(category);
  }

  /**
   * Change UI state of the selected item
   * @param $event
   */
  public selectItem($event: MouseEvent): void {
    $event.stopPropagation();
    const e = $event.target as HTMLSpanElement;
    e.classList.toggle("selected");
  }
}
