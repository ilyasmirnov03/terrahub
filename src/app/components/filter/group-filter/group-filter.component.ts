import {Component, Input} from '@angular/core';
import {Category} from '../../../interfaces/Category';
import {NgClass} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector -- used for styling purposes
  selector: '[thb-group-filter]',
  templateUrl: './group-filter.component.html',
  standalone: true,
  imports: [
    NgClass,
    FaIconComponent
  ]
})
export class GroupFilterComponent {
  /**
   * Inputted category to render
   */
  @Input()
  category!: Category;

  /**
   * Handle grouped categories dropdown
   * @param category
   */
  public handleMoreFilters(category: Category): void {
    category.show = !category.show;
  }
}
