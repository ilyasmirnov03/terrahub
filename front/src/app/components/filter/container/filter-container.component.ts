import {Component, EventEmitter, Output, input} from '@angular/core';
import {Category} from '../../../interfaces/category.interface';
import { NgClass } from "@angular/common";
import {ClickedOutsideDirective} from "../../../directives/clicked-outside.directive";
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {FilterComponent} from "../component/filter.component";
import {GroupFilterComponent} from "../group-filter/group-filter.component";
import {ButtonComponent} from "../../global/button/button.component";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'thb-filter-container',
    templateUrl: './filter-container.component.html',
    imports: [
    NgClass,
    ClickedOutsideDirective,
    FaIconComponent,
    FilterComponent,
    GroupFilterComponent,
    ButtonComponent
]
})
export class FilterContainerComponent {

  /**
   * Categories to render
   */
  public readonly categories = input.required<Category[]>();

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

  public constructor(
    library: FaIconLibrary,
  ) {
    library.addIcons(faXmark);
  }

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
   * @desc Toggle menu based on the specified boolean or flip if no params were specified
   * @event click
   * @param menuClosed Determines whether to open or close the menu
   * @param $event
   */
  public handleMenu($event: MouseEvent, menuClosed: boolean | null = null): void {
    $event.stopPropagation();
    if (menuClosed === null) {
      this.menuClosed = !this.menuClosed;
    } else {
      this.menuClosed = menuClosed;
    }
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
