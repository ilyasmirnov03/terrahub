import {Component, OnInit} from '@angular/core';
import {Item} from "../../../Item";
import {ItemsService} from "../../../services/items.service";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit{
  constructor(
    private itemsService: ItemsService
  ) {}
  items: Item[] = [];
  categories: string[] = [];

  //get items and categories from database
  ngOnInit() {
    this.itemsService.getItems().subscribe((items) => {
      this.items = items;
    });
    this.itemsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  selectCategory($event: MouseEvent) {
    let e = $event.target as HTMLSpanElement;
    if (e.tagName === "SPAN") {
      e.classList.add("selected");
    }
  }
}
