import {Component, Input} from '@angular/core';
import {Category} from '../../../interfaces/Category';

@Component({
  selector: '[thb-group-filter]',
  templateUrl: './group-filter.component.html'
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
