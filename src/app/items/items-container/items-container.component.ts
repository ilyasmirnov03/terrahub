import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from "../../Item";
import {ItemsService} from "../../services/items.service";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
  constructor(
    private itemsService: ItemsService
  ) {
  }

  //variables assigned by a service
  items: Item[] = [];
  categories: string[] = [];
  //variables used to search and filter items
  filterCategories: string[] = [];
  searchText: string = "";
  @ViewChild("visibleItems") numberOfVisibleItemsElement!: ElementRef;

  //get items and categories from database
  ngOnInit() {
    this.itemsService.getItems().subscribe((items) => {
      this.items = items;
    });
    this.itemsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  toggleArrayItem(a: Array<string>, v: string) {
    let i = a.indexOf(v);
    if (i === -1) {
      a.push(v);
    } else {
      a.splice(i, 1);
    }
    this.filterCategories = [...a];
  }

  //on click on category event
  selectCategory(category: string, $event: MouseEvent) {
    this.toggleArrayItem(this.filterCategories, category);
    console.log(this.filterCategories)
    let e = $event.target as HTMLSpanElement;
    e.classList.toggle("selected");
  }

  selectItem($event: MouseEvent) {
    let e = $event.target as HTMLSpanElement;
    if (e.tagName !== "INPUT") return;
  }
}
