import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  //on click on category event
  selectCategory($event: MouseEvent) {
    let e = $event.target as HTMLSpanElement;
    //only spans accepted from now on
    if (e.tagName !== "SPAN") return;
    e.classList.toggle("selected");
    //if no category is selected => make every item appear
    if (e.closest("div")?.querySelectorAll("span.selected").length === 0) {
      document.querySelectorAll("app-item.hidden").forEach(item => {item.classList.remove("hidden")});
    } else {
      let selector: string = "";
      //constructing the selector, ex: ".class,.class1,.class2"
      e.closest("div")?.querySelectorAll("span.selected").forEach(category => {
        selector += `.${category.textContent},`;
      });
      selector = selector.substring(0, selector.length-1);
      //hide everything that is not hidden
      document.querySelectorAll(`app-item:not(.hidden)`).forEach(item => {item.classList.add("hidden")});
      //make selected items appear
      document.querySelectorAll(`app-item${selector}`).forEach(item => {item.classList.remove("hidden")});
    }
  }
}
