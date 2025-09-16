import {Component, input} from '@angular/core';
import {Category} from '../../../interfaces/category.interface';
import {NgClass} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector -- used for styling purposes
    selector: '[thb-group-filter]',
    templateUrl: './group-filter.component.html',
    imports: [
        NgClass,
        FaIconComponent
    ]
})
export class GroupFilterComponent {
  /**
   * Inputted category to render
   */
  readonly category = input.required<Category>();

  /**
   * Handle grouped categories dropdown
   * @param category
   */
  public handleMoreFilters(event: MouseEvent, category: Category): void {
    event.stopPropagation();
    category.show = !category.show;
  }
}
