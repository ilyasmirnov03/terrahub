import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from "../interfaces/Item";
import {ItemsService} from "../../services/items.service";
import {Category} from "../interfaces/Category";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {CompletedItem} from "../interfaces/CompletedItem";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {SetItems} from "../state/actions";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent implements OnInit {
  completedItems!: Observable<CompletedItem[]>;

  constructor(
    private itemsService: ItemsService,
    private dbService: NgxIndexedDBService,
    private store: Store<{ items: CompletedItem[] }>
  ) {
    this.completedItems = store.select((state: any) => state.items.completedItems);
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
      // get all entries from indexedDB
      this.dbService.getAll('items').subscribe(completedItems => {
        // set completed items to global state
        this.store.dispatch(SetItems({completedItems: completedItems as CompletedItem[]}));
        completedItems.forEach(item => {
          // find item object with matching id and if was found assign completed to true
          const foundObject = this.items.find(obj => obj.id === (item as CompletedItem).id);
          if (foundObject) foundObject.completed = true;
        });
      });
    });
    // get categories
    this.itemsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
