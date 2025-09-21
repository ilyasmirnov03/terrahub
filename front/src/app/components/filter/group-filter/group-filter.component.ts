import { Component, input } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { NgClass } from "@angular/common";
import { IconComponent } from '../../global/icon/icon.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector -- used for styling purposes
  selector: '[thb-group-filter]',
  templateUrl: './group-filter.component.html',
  imports: [
    NgClass,
    IconComponent,
  ],
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
