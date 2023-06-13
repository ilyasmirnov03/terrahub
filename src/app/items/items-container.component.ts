import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Item} from "../interfaces/Item";
import {TerraHubService} from "../services/terra-hub.service";
import {Category} from "../interfaces/Category";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {CompletedItem} from "../interfaces/CompletedItem";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {SetItems} from "./state/actions";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html'
})
export class ItemsContainerComponent implements OnInit {
  completedItems!: Observable<CompletedItem[]>;

  constructor(
    private itemsService: TerraHubService,
    private dbService: NgxIndexedDBService,
    private store: Store<{ items: CompletedItem[] }>,
    private route: ActivatedRoute
  ) {
    this.completedItems = store.select((state: any) => state.items.completedItems);
  }

  //variables assigned by a service
  items: Item[] = [];
  categories: Category[] = [];
  collectionMode!: boolean;
  //variables used to search and filter items
  filteredCategories: string[] = [];
  searchText: string = "";

  // children elements
  @ViewChild("visibleItems") numberOfVisibleItemsElement!: ElementRef;
  @ViewChild("filters") filtersElement!: ElementRef;

  //get items and categories from database
  ngOnInit() {
    this.collectionMode = !!this.route.snapshot.paramMap.get("collection");
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
    this.itemsService.getItemsCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  handleMenu(close: boolean) {
    this.filtersElement.nativeElement.classList.toggle("hidden", close);
  }
}
