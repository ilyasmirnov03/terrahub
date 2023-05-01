import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from "../interfaces/Item";
import {ItemsService} from "../../services/items.service";
import {Category} from "../interfaces/Category";

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
  categories: Category[] = [];
  //variables used to search and filter items
  filteredCategories: string[] = [];
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

  selectItem($event: MouseEvent) {
    let e = $event.target as HTMLSpanElement;
    if (e.tagName !== "INPUT") return;
  }
}
