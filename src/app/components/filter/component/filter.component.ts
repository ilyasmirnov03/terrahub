import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faChevronUp, faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: '[thb-filter]',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  standalone: true,
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

  public constructor(
    library: FaIconLibrary,
  ) {
    library.addIcons(faChevronUp, faXmark);
  }

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
