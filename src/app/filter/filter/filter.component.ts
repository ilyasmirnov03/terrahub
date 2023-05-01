import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  category!: { group: string, names: string };

  filteredCategories: string[] = [];
  showMore: boolean = false;
  @Output()
  filterCategories: EventEmitter<string[]> = new EventEmitter();

  toggleArrayItem(a: Array<string>, v: string) {
    let i = a.indexOf(v);
    if (i === -1) {
      a.push(v);
    } else {
      a.splice(i, 1);
    }
    this.filteredCategories = [...a];
    this.filterCategories.emit(this.filteredCategories);
  }

  handleMoreFilters() {
    this.showMore = !this.showMore;
  }

  selectCategory(category: string, $event: MouseEvent) {
    console.log(category)
    this.toggleArrayItem(this.filteredCategories, category);
    console.log(this.filterCategories)
    let e = $event.target as HTMLSpanElement;
    e.classList.toggle("selected");
  }
}
