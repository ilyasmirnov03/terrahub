import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../interfaces/Category";

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html'
})
export class FilterContainerComponent {
  /**
   * Categories to render
   */
  @Input()
  public categories!: Category[];

  /**
   * Chosen categories event emitter
   * @private
   */
  @Output()
  private filterCategories: EventEmitter<string[]> = new EventEmitter<string[]>();

  /**
   * Chosen categories array
   * @private
   */
  private filteredCategories: string[] = [];

  /**
   * Determines whether the menu is closed or open
   */
  public menuClosed = true;

  /**
   * Toggle value in categories array and emit it
   * @param array
   * @param value
   * @private
   */
  private toggleArrayItem(array: string[], value: string) {
    const index: number = array.indexOf(value);
    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
    // reassign variable to trigger pipe
    this.filteredCategories = [...array];
    this.filterCategories.emit(this.filteredCategories);
  }

  /**
   * @desc Toggle menu based on the specified boolean
   * @event click
   * @param menuClosed Determines whether to open or close the menu
   */
  public handleMenu(menuClosed: boolean): void {
    this.menuClosed = menuClosed;
  }

  /**
   * @desc Toggle the selected category in the categories array
   * @event selectedCategoryEvent
   * @param category
   */
  public selectCategory(category: string): void {
    this.toggleArrayItem(this.filteredCategories, category);
  }
}
